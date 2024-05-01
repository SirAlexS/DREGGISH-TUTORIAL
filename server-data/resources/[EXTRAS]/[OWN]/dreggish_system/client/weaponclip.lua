ESX = nil
TriggerEvent('esx:getSharedObject', function(obj)
    ESX = obj
end)

RegisterNetEvent('esx_weashop:clipcli')
AddEventHandler('esx_weashop:clipcli', function()
    local ped = PlayerPedId()
    if IsPedArmed(ped, 4) then
        local hash = GetSelectedPedWeapon(ped)
        if hash ~= nil then
            TriggerServerEvent('esx_weashop:remove', hash)
        else
            ESX.ShowNotification("nimm eine Waffe in die Hand")
        end
    else
        ESX.ShowNotification("nimm eine Waffe in die Hand")
    end
end)