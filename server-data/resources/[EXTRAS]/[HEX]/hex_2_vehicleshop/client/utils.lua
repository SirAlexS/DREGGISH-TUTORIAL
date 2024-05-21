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

function GeneratePlate()
    local isPlateTaken = nil
    Citizen.Wait(50)
    math.randomseed(GetGameTimer())
	
    local generatedPlate = string.upper(GetRandomLetter(3) .. ' ' .. GetRandomNumber(3))

    Framework.Functions.TriggerServerCallback(Config.Triggers.isPlateTaken, function (taken)
        isPlateTaken = taken
    end, generatedPlate)

    while isPlateTaken == nil do
        Citizen.Wait(0)
    end

    if isPlateTaken then
        return GeneratePlate()
    else
        return generatedPlate
    end
end

function IsPlateTaken(plate)
	local callback = 'waiting'

	Framework.Functions.TriggerServerCallback(Config.Triggers.isPlateTaken, function(isPlateTaken)
		callback = isPlateTaken
	end, plate)

	while type(callback) == 'string' do
		Citizen.Wait(0)
	end

	return callback
end

exports('IsPlateTaken', IsPlateTaken)
exports('GeneratePlate', GeneratePlate)