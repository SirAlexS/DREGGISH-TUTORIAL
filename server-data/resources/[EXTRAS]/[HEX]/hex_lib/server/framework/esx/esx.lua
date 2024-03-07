Citizen.CreateThread(function()
    if Config.Framework == 'ESX' then
        local status, ESX = pcall(function()
            return exports['es_extended']:getSharedObject()
        end)

        if not status then
            while not ESX do
                TriggerEvent("esx:getSharedObject", function(object) ESX = object end)
                Citizen.Wait(50)
            end
        end

        function Framework.Functions.GetPlayerObject(source)
            local xPlayer = ESX.GetPlayerFromId(source)
            
            return xPlayer
        end

        function Framework.Functions.GetIdentifier(playerObject)
            return playerObject.identifier
        end

        function Framework.Functions.GetPlayerGroup(playerObject)
            return playerObject.group
        end

        function Framework.Functions.GetName(playerObject)
            return playerObject.name
        end

        function Framework.Functions.GetJob(playerObject)
            return playerObject.job
        end

        function Framework.Functions.RegisterServerCallback(name, cb)
            ESX.RegisterServerCallback(name, cb)
        end

        function Framework.Functions.AddWeapon(playerObject, name, count)
            playerObject.addWeapon(name, count)
        end

        function Framework.Functions.RemoveWeapon(playerObject, name, ammo)
            playerObject.removeWeapon(name, ammo)
        end

        function Framework.Functions.AddItem(playerObject, name, count)
            playerObject.addInventoryItem(name, count)
        end

        function Framework.Functions.RemoveItem(playerObject, name, count)
            playerObject.removeInventoryItem(name, count)
        end

        function Framework.Functions.RemoveMoney(playerObject, moneyType, amount)
            playerObject.removeAccountMoney(moneyType, amount)
        end

        function Framework.Functions.AddMoney(playerObject, moneyType, amount)
            playerObject.addAccountMoney(moneyType, amount)
        end

        function Framework.Functions.GetItem(playerObject, name)
            local item = playerObject.getInventoryItem(name)

            return {
                count = (item and item.count or 0)
            }
        end

        function Framework.Functions.GetWeapon(playerObject, name)
            return playerObject.getWeapon(name)
        end

        function Framework.Functions.GetGroup(playerObject)
            return playerObject.group
        end

        function Framework.Functions.HasWeapon(playerObject, name)
            return playerObject.hasWeapon(name)
        end

        function Framework.Functions.AddWeaponTint(playerObject, weaponName, tintIndex)
            playerObject.setWeaponTint(weaponName, tintIndex)
        end

        function Framework.Functions.AddWeaponComponent(playerObject, weaponName, weaponComponent)
            playerObject.addWeaponComponent(weaponName, weaponComponent)
        end

        function Framework.Functions.CanCarryItem(playerObject, name, count)
            return playerObject.canCarryItem(name, count)
        end

        function Framework.Functions.GetMoney(playerObject, moneyType)
            local account = playerObject.getAccount(moneyType)

            if account then
                return account.money
            end

            return 0
        end

        Framework.ready = true
    end
end)