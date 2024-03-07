Framework = {
    ready = false,
    Functions = {
        ready = function(cb)
            Citizen.CreateThread(function()                
                while not Framework.ready do
                    Citizen.Wait(50)
                end
    
                Citizen.Wait(50)
    
                return cb(Framework)
            end)
        end
    }
}

local function GetFramework()
    return Framework
end

exports('GetFramework', GetFramework)