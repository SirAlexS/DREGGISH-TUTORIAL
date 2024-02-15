ESX = nil

function TableIncludes(table, element)
    for _, value in ipairs(table) do
        if value == element then
            return true
        end
    end
    return false
end


TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

ESX.RegisterServerCallback('dreggish_einreisecooldown:CheckNewPlayer', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local identifier = xPlayer.identifier

    local result = MySQL.Sync.fetchAll("SELECT * FROM einreisecooldown WHERE identifier = @identifier", {['@identifier'] = identifier})

    if not result or #result == 0 then
        TriggerClientEvent('dreggish_einreisecooldown:ActivateCooldown', source, Config.cooldownTime)
        MySQL.Async.execute("INSERT INTO einreisecooldown (identifier, new_player, cooldown_end) VALUES (@identifier, @new_player, @cooldown_end)",
            {['@identifier'] = identifier, ['@new_player'] = true, ['@cooldown_end'] = os.date('%Y-%m-%d %H:%M:%S', os.time() + 3600)}) -- 3600 Sekunden = 1 Stunde
    elseif result[1].new_player then
        local cooldownEndTime = result[1].cooldown_end
        local currentTime = os.time()

        if cooldownEndTime > currentTime then
            local remainingCooldown = cooldownEndTime - currentTime
            TriggerClientEvent('dreggish_einreisecooldown:ActivateCooldown', source, remainingCooldown)
        else
            MySQL.Async.execute("UPDATE einreisecooldown SET new_player = @new_player WHERE identifier = @identifier",
                {['@new_player'] = false, ['@identifier'] = identifier})
        end
    end

    cb()
end)

RegisterCommand('removekampfcooldown', function(source, args, rawCommand)
    local xPlayer = ESX.GetPlayerFromId(source)

    if xPlayer and xPlayer.getGroup() and table.includes(Config.allowedUserGroupsRemoveCooldown, xPlayer.getGroup()) then
        local targetPlayer = tonumber(args[1])

        if targetPlayer then
            TriggerClientEvent('dreggish_einreisecooldown:ActivateCooldown', targetPlayer, 0)
        else
            TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Benutzung: /removekampfcooldown [Ziel-Spieler-ID]")
        end
    else
        TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Du hast keine Berechtigung, diesen Befehl zu verwenden.")
    end
end, false)

RegisterCommand('setkampfcooldown', function(source, args, rawCommand)
    local xPlayer = ESX.GetPlayerFromId(source)

    if xPlayer and xPlayer.getGroup() and table.includes(Config.allowedUserGroupsSetCooldown, xPlayer.getGroup()) then
        local targetPlayer = tonumber(args[1])
        local cooldownTime = tonumber(args[2])

        if targetPlayer and cooldownTime then
            TriggerClientEvent('dreggish_einreisecooldown:ActivateCooldown', targetPlayer, cooldownTime)
        else
            TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Benutzung: /setkampfcooldown [Ziel-Spieler-ID] [Cooldown-Zeit in Sekunden]")
        end
    else
        TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Du hast keine Berechtigung, diesen Befehl zu verwenden.")
    end
end, false)
