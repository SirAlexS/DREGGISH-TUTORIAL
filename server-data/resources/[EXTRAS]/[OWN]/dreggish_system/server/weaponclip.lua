ESX = nil

TriggerEvent('esx:getSharedObject', function(obj)
    ESX = obj
end)

ESX.RegisterUsableItem('clip', function(source)
    TriggerClientEvent('esx_weashop:clipcli', source)
end)

function getWeaponNameByHash(xPlayer, hash)
    for i, weapon in ipairs(xPlayer.getLoadout()) do
        local currentHash = GetHashKey(weapon.name)
        if (hash == currentHash) then
            return weapon.name
        end
    end
end

RegisterServerEvent('esx_weashop:remove')
AddEventHandler('esx_weashop:remove', function(weaponHash)
    local xPlayer = ESX.GetPlayerFromId(source)
    if (xPlayer == nil) then
        return
    end
    local clipItem = xPlayer.getInventoryItem("clip")
    if (clipItem == nil or clipItem.count <= 0) then
        return
    end
    local weaponName = getWeaponNameByHash(xPlayer, weaponHash)
    if (weaponName == nil) then
        return
    end
    xPlayer.removeInventoryItem('clip', 1)
    xPlayer.addWeaponAmmo(weaponName, 50)
end)