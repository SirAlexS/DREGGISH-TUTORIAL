Framework = {
    ready = false,
    Functions = {
        ready = function(cb)
            Citizen.CreateThreadNow(function()                
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

local NumberCharset = {}
local Charset = {}

for i = 48,  57 do
    NumberCharset[#NumberCharset + 1] = string.char(i)
end

for i = 65,  90 do
    Charset[#Charset + 1] = string.char(i)
end

for i = 97, 122 do
    Charset[#Charset + 1] = string.char(i)
end

local function GetRandomNumber(length)
	Citizen.Wait(0)
	
    math.randomseed(GetGameTimer())
	
    if length > 0 then
		return GetRandomNumber(length - 1) .. NumberCharset[math.random(1, #NumberCharset)]
	else
		return ''
	end
end

local function GetRandomLetter(length)
	Citizen.Wait(0)

	math.randomseed(GetGameTimer())
	
    if length > 0 then
		return GetRandomLetter(length - 1) .. Charset[math.random(1, #Charset)]
	else
		return ''
	end
end

function Framework.Functions.GeneratePlate()
    Citizen.Wait(50)
    math.randomseed(GetGameTimer())
	
    local generatedPlate = string.upper(GetRandomLetter(3) .. ' ' .. GetRandomNumber(3))

    local result = MySQL.Sync.fetchAll('SELECT 1 FROM owned_vehicles WHERE plate = @plate', {
        ['@plate'] = generatedPlate
    })

    if result[1] then
        return Framework.Functions.GeneratePlate()
    else
        return generatedPlate
    end
end

function Framework.Functions.GivePlayerVehicle(playerId, identifier, vehicleType, vehicleSpawn, vehicleName, plate, vehicleProps, stored)
    MySQL.Async.execute('INSERT INTO owned_vehicles (owner, plate, vehicle, type, job, stored) VALUES (@owner, @plate, @vehicle, @type, @job, @stored)', {
        ['@owner'] = identifier,
        ['@plate'] = plate,
        ['@vehicle'] = (vehicleProps and vehicleProps or '{"plate":"' .. plate .. '", "model":' .. (type(vehicleSpawn) == 'string' and joaat(vehicleSpawn) or vehicleSpawn) .. '}'),
        ['@type'] = vehicleType,
        ['@job'] = 'civ',
        ['@stored'] = stored or 0
        }, function(rowsChanged)
    end)
end