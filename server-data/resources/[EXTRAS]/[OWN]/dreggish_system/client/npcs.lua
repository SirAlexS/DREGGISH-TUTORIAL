-- Density values from 0.0 to 1.0.
VehicleDensityMultiplier = 0.0
PedDensityMultiplier = 0.0
DisableCops = true
DisableDispatch = true
Citizen.CreateThread(function()
	while true do
	    Citizen.Wait(0)
		-- These natives have to be called every frame.
		SetVehicleDensityMultiplierThisFrame(VehicleDensityMultiplier) -- set traffic density to 0 
		SetRandomVehicleDensityMultiplierThisFrame(VehicleDensityMultiplier) -- set random vehicles (car scenarios / cars driving off from a parking spot etc.) to 0
		SetParkedVehicleDensityMultiplierThisFrame(VehicleDensityMultiplier) -- set random parked vehicles (parked car scenarios) to 0
		SetPedDensityMultiplierThisFrame(PedDensityMultiplier) -- set npc/ai peds density to 0
		SetScenarioPedDensityMultiplierThisFrame(PedDensityMultiplier, PedDensityMultiplier) -- set random npc/ai peds or scenario peds to 0
		if DisableDispatch then
			for i = 1, 12 do
				EnableDispatchService(i, false)
			end
		end
		if DisableCops then
			SetPlayerWantedLevel(PlayerId(), 0, false)
			SetPlayerWantedLevelNow(PlayerId(), false)
			SetPlayerWantedLevelNoDrop(PlayerId(), 0, false)
			SetCreateRandomCops(false) -- disable random cops walking/driving around.
			SetCreateRandomCopsNotOnScenarios(false) -- stop random cops (not in a scenario) from spawning.
			SetCreateRandomCopsOnScenarios(false) -- stop random cops (in a scenario) from spawning.
		end
		if VehicleDensityMultiplier == 0 then
			SetGarbageTrucks(false) -- Stop garbage trucks from randomly spawning
			SetRandomBoats(false) -- Stop random boats from spawning in the water.
			local x,y,z = table.unpack(GetEntityCoords(PlayerPedId()))
			ClearAreaOfVehicles(x, y, z, 1000, false, false, false, false, false)
			RemoveVehiclesFromGeneratorsInArea(x - 500.0, y - 500.0, z - 500.0, x + 500.0, y + 500.0, z + 500.0);
		end
	end
end)

local gangs = {
	`AMBIENT_GANG_HILLBILLY`,
	`AMBIENT_GANG_BALLAS`,
	`AMBIENT_GANG_MEXICAN`,
	`AMBIENT_GANG_FAMILY`,
	`AMBIENT_GANG_MARABUNTE`,
	`AMBIENT_GANG_SALVA`,
	`GANG_1`,
	`GANG_2`,
	`GANG_9`,
	`GANG_10`,
}

for _,gang in ipairs(gangs) do
	SetRelationshipBetweenGroups(3, gang, `PLAYER`)
	SetRelationshipBetweenGroups(3, `PLAYER`, gang)
end