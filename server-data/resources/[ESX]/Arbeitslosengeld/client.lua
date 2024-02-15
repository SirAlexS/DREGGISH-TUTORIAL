print("Clientcode wurde erfolgreich geladen.")
TriggerEvent('chatMessage', '^2Clientcode wurde erfolgreich geladen.')


RegisterNetEvent('paymentReceived')
AddEventHandler('paymentReceived', function(amount)
    print("Zahlung erhalten. Betrag:", amount)
    -- Hier könntest du eine Benachrichtigung für den Spieler hinzufügen
    print('Du hast $' .. amount .. ' erhalten.')
end)

RegisterNetEvent('paymentCooldown')
AddEventHandler('paymentCooldown', function(timeLeft)
    print("Cooldown aktiv. Verbleibende Zeit:", timeLeft)
    -- Hier könntest du eine Benachrichtigung für den Spieler hinzufügen
    print('Du musst noch ' .. timeLeft .. ' Sekunden warten, bevor du erneut Geld abholen kannst.')
end)

print("Vor dem Laden des NPC-Modells")

print("Vor dem Erstellen des Markers")

local marker = nil

Citizen.CreateThread(function()
    while true do
        local playerCoords = GetEntityCoords(PlayerId(), false)
        local distance = #(playerCoords - Config.npcCoords)

        if distance < 10.0 then
            if not marker then
                marker = CreateMarker()
                print("Marker erstellt")
            end
        else
            if marker then
                RemoveMarker(marker)
                marker = nil
                print("Marker entfernt")
            end
        end

        Wait(500)
    end
end)

function CreateMarker()
    local marker = AddBlipForCoord(Config.npcCoords.x, Config.npcCoords.y, Config.npcCoords.z)
    SetBlipSprite(marker, 1) -- Blip-Symbol: 1 (Standardkreis)
    SetBlipDisplay(marker, 4) -- Anzeigeoptionen: 4 (Blip wird immer angezeigt)
    SetBlipScale(marker, 1.0) -- Größe des Blips
    SetBlipColour(marker, 2) -- Farbe des Blips: 2 (Grün)
    SetBlipAsShortRange(marker, true) -- Blip wird nicht auf der Karte angezeigt

    return marker
end

function RemoveMarker(marker)
    if marker then
        RemoveBlip(marker)
    end
end