if Config.FoodHud then
    if GetResourceState('hex_food') == 'started' then
        RegisterNetEvent('hex_food:onTick', function(food, thirst)
            SendNUIMessage({
                action = 'refreshFood',
                data = {
                    food = food,
                    thirst = thirst
                }
            })
        end)
    elseif GetResourceState('esx_status') == 'started' then
        RegisterNetEvent('esx_status:onTick', function(data)
            local hunger, thirst
            
            for i = 1, #data do
                if data[i].name == "thirst" then
                    thirst = math.floor(data[i].percent)
                end
                if data[i].name == "hunger" then
                    hunger = math.floor(data[i].percent)
                end
            end
    
            SendNUIMessage({
                action = 'refreshFood',
                data = {
                    food = hunger,
                    thirst = thirst
                }
            })
        end)
    end
end