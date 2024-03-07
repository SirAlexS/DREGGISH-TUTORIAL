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

        while ESX.GetPlayerData().job == nil do
            Citizen.Wait(100)
        end

        while not ESX.IsPlayerLoaded() do
            Citizen.Wait(50)
        end

        Citizen.Wait(500)

        ESX.PlayerData = ESX.GetPlayerData()

        RegisterNetEvent('esx:setJob', function(job)
            ESX.PlayerData.job = job
            TriggerEvent('hex_lib:setJob', job)
        end)

        RegisterNetEvent('esx:setAccountMoney', function(account)
            for k, v in ipairs(ESX.PlayerData.accounts) do
                if v.name == account.name then
                    ESX.PlayerData.accounts[k] = account
                    break
                end
            end

            TriggerEvent('hex_lib:setAccountMoney', account)
        end)

        function Framework.Functions.GetJob()
            return ESX.PlayerData.job
        end

        function Framework.Functions.GetMoney(account)
            for k, v in pairs(ESX.PlayerData.accounts) do
                if v.name == account then
                    return v.money
                end
            end

            return 0
        end

        function Framework.Functions.GetIdentifier()
            return ESX.PlayerData.identifier
        end

        function Framework.Functions.GetItemLabel(name)
            for k, v in pairs(ESX.GetPlayerData().inventory) do
                if v.name == name then
                    return v.label
                end
            end
        end
        
        function Framework.Functions.GetItemCount(name)
            for k, v in pairs(ESX.GetPlayerData().inventory) do
                if v.name == name then
                    return v.count
                end
            end
        end

        function Framework.Functions.GetItems()
            return ESX.GetPlayerData().inventory
        end
        
        function Framework.Functions.GetWeaponList()
            return ESX.GetWeaponList()
        end

        function Framework.Functions.GetWeaponLabel(name)
            for k, v in pairs(ESX.GetWeaponList()) do
                if v.name:lower() == name:lower() then
                    return v.label
                end
            end
        end

        function Framework.Functions.TriggerServerCallback(name, cb, ...)
            ESX.TriggerServerCallback(name, function(...)
                cb(...)
            end, ...)
        end

        function Framework.Functions.GetVehicleProperties(vehicle)
            return ESX.Game.GetVehicleProperties(vehicle)
        end

        function Framework.Functions.SpawnedVehicle(vehicle, vehicleProps)
            local ped = PlayerPedId()
            
            ESX.Game.SetVehicleProperties(vehicle, vehicleProps)
    
            SetVehRadioStation(vehicle, 'OFF')
            SetPedIntoVehicle(ped, vehicle, -1)
        end

        Framework.UI = {}
        Framework.UI.Menu = ESX.UI.Menu
        Framework.ready = true
    end
end)