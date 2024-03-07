Citizen.CreateThread(function()
    if Config.Voice.System == 'saltychat' then
        local id
        local idCount = 0
        AddEventHandler('SaltyChat_VoiceRangeChanged', function(voiceRange, index, availableVoiceRanges)
            SendNUIMessage({
                action = 'voice',
                data = {
                    type = 'range',
                    range = index,
                    availableVoiceRanges = availableVoiceRanges
                }
            })
            
            local curId = idCount
            idCount = idCount + 1
    
            change = curId

            SetTimeout(2500, function()
                if change == curId then
                    change = nil
                end
            end)

            Citizen.CreateThread(function()     
                while change == curId do
                    Citizen.Wait(0)
                    local ped = PlayerPedId()
                    local coords = GetEntityCoords(ped)
        
                    DrawMarker(1, coords.x, coords.y, coords.z - 1.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, voiceRange * 2.0, voiceRange * 2.0, 1.0, 3, 74, 221, 100, false, false, true, 2, false, false, false)
                end
            end)
        end)
        
        AddEventHandler('SaltyChat_MicStateChanged', function(isMicrophoneEnabled)
            SendNUIMessage({
                action = 'voice',
                data = {
                    type = 'mic',
                    state = isMicrophoneEnabled
                }
            })
        end)
        
        AddEventHandler('SaltyChat_TalkStateChanged', function(isTalking)
            SendNUIMessage({
                action = 'voice',
                data = {
                    type = 'speak',
                    state = isTalking
                }
            })
        end)
        
        AddEventHandler('SaltyChat_RadioChannelChanged', function(radioChannel, isPrimaryChannel)
            if radioChannel and radioChannel ~= '0' then
                SendNUIMessage({
                    action = 'voice',
                    data = {
                        type = 'radio',
                        state = true
                    }
                })
            else
                SendNUIMessage({
                    action = 'voice',
                    data = {
                        type = 'radio',
                        state = false
                    }
                })
            end
        end)
    elseif Config.Voice.System == 'pma' then
        local function stringStarts(string, start)
            return string:sub(1, string.len(start)) == start
        end

        AddStateBagChangeHandler('radioChannel', 'player:' .. GetPlayerServerId(PlayerId()), function(bagName, key, value, reserved, replicated)
            if replicated or not stringStarts(bagName, "player:") then
                return
            end

            SendNUIMessage({
                action = 'voice',
                data = {
                    type = 'radio',
                    state = value ~= 0
                }
            })
        end)

        Citizen.CreateThread(function()
            local isTalking = false

            while true do
                Citizen.Wait(33)
                local networkTalking = NetworkIsPlayerTalking(PlayerId())

                if not isTalking and networkTalking then
                    isTalking = true

                    SendNUIMessage({
                        action = 'voice',
                        data = {
                            type = 'speak',
                            state = true
                        }
                    })
                elseif isTalking and not networkTalking then
                    isTalking = false
                    
                    SendNUIMessage({
                        action = 'voice',
                        data = {
                            type = 'speak',
                            state = false
                        }
                    })
                end
            end
        end)

        local voiceReachTimeout = nil
        local change = false

        local idCount = 0
        AddEventHandler('pma-voice:setTalkingMode', function(voiceMode)
            local voice = Config.Voice.Ranges[voiceMode]

            SendNUIMessage({
                action = 'voice',
                data = {
                    type = 'range',
                    range = voiceMode - 1,
                    availableVoiceRanges = 3
                }
            })

            local curId = idCount
            idCount = idCount + 1

            change = curId
        
            voiceReachTimeout = SetTimeout(1500, function()
                if change == curId then
                    change = nil
                end
            end)
        
            Citizen.CreateThread(function()        
                while change == curId do
                    Citizen.Wait(0)
                    local ped = PlayerPedId()
                    local coords = GetEntityCoords(ped)
        
                    DrawMarker(1, coords.x, coords.y, coords.z - 1.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, voice * 2.0, voice * 2.0, 1.0, 3, 74, 221, 100, false, false, true, 2, false, false, false)
                end
            end)
        end)
    end

    RegisterCommand('testNotify', function()
        exports['hex_2_hud']:Notify('Info:', 'Text here', 'info', 5000)
        Citizen.Wait(2500)
        exports['hex_2_hud']:Notify('Error:', 'Text here', 'error', 5000)
        Citizen.Wait(2500)
        exports['hex_2_hud']:Notify('Success:', 'Text here', 'success', 5000)
    end)

    RegisterCommand('testLife', function()
        exports['hex_2_hud']:Lifeinvader('Announce', 'This could be your extreme Long text with nothing inside.', 5000)
    end)

    RegisterCommand('testAnnounce', function()
        exports['hex_2_hud']:Announce('Announce', 'Your server will be restarted in a few minutes', 5000)
    end)
end)