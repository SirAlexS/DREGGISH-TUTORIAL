## Installation

#### Disable default esx_ambulancejob Deathscreen
Navigate to `esx_ambulancejob/client/main.lua` and comment the following lines.

```lua
function OnPlayerDeath()
    isDead = true
    ESX.UI.Menu.CloseAll()
    TriggerServerEvent('esx_ambulancejob:setDeathStatus', true)
  --[[ 
    ClearTimecycleModifier()
    SetTimecycleModifier("REDMIST_blend")
    SetTimecycleModifierStrength(0.7)
    SetExtraTimecycleModifier("fp_vig_red")
    SetExtraTimecycleModifierStrength(1.0)
    SetPedMotionBlur(PlayerPedId(), true)
    StartDeathTimer()
    StartDeathCam()
    StartDistressSignal() 
    ]]
end
```

#### Replace Dispatch System
Navigate to `esx_ambulancejob/server/main.lua` and replace the contents of the following event.

```lua
RegisterNetEvent('esx_ambulancejob:onPlayerDistress')
AddEventHandler('esx_ambulancejob:onPlayerDistress', function()
	local source = source
	if deadPlayers[source] then
		deadPlayers[source] = 'distress'
		local Ambulance = ESX.GetExtendedPlayers("job", "ambulance")
		for _, xPlayer in pairs(Ambulance) do
			TriggerClientEvent('esx_ambulancejob:PlayerDistressed', xPlayer.source, source)
		end
	end
end)
```