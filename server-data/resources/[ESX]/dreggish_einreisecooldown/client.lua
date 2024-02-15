local cooldownActive = false
local remainingCooldown = 0

RegisterNetEvent('dreggish_einreisecooldown:ActivateCooldown')
AddEventHandler('dreggish_einreisecooldown:ActivateCooldown', function(cooldownTime)
    cooldownActive = true
    remainingCooldown = cooldownTime
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        local playerPed = PlayerPedId()

        if cooldownActive then
            DisableControlAction(0, 24, true) -- Disable attack (left mouse click)
            DisableControlAction(0, 25, true) -- Disable aim (right mouse click)
            
            DrawText("Kampf Cooldown: " .. remainingCooldown .. " Sekunden", 0.95, 0.95, 255, 255, 255, 150)

            if remainingCooldown > 0 then
                remainingCooldown = math.max(remainingCooldown - 0.1, 0)
            else
                cooldownActive = false
            end
        end
    end
end)

function DrawText(text, x, y, r, g, b, a)
    SetTextFont(4)
    SetTextProportional(0)
    SetTextScale(0.5, 0.5)
    SetTextColour(r, g, b, a)
    SetTextDropshadow(0, 0, 0, 0, 55)
    SetTextEdge(1, 0, 0, 0, 255)
    SetTextDropShadow()
    SetTextOutline()
    SetTextEntry("STRING")
    AddTextComponentString(text)
    DrawText(x, y)
end
