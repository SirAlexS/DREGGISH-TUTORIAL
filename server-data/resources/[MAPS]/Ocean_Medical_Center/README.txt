Information about OMC Ocean Medical Center mapping

Project developed by  Link 59 and Mxaizen

If you have a problem, making a ticket on the discord : https://discord.gg/ttYjpzFF
If you want to be informed of updates go to : https://discord.gg/ttYjpzFF : and verify that you have the grade "Ocean" if it is not the case, make a ticket.
----------------------------------------------------------------------------
 
If we want to add the mapping to my server :

Requirements fivem serv	GameBuild 2189 or higher

[1] Add resources (the "Ocean_Medical _Center"file )on your server, be careful not to change the location of the files in this folder !

[2] In your "server.Cfg" file add the line →         ensure Ocean_Medical _Center  
    to load the resources

[3] Make sure that your keymaster account with which you bought the mapping is the same one linked to your server,
    or else The resource will simply not start, and show a ‘You lack the required entitlement’ error in the server console, and on your server your game will crach when you approaching the hospital mapping

[4] Clean your server cache

[5] Restart your server

----------------------------------------------------------------------------
How to install or update mapping?

[1] Go to your key master https://keymaster.fivem.net/ and go to your "Purchased Assets" section to download the new content 

[2] remove all our resources from your server files

[3] Clean your server cache

[4] restart your server

----------------------------------------------------------------------------
----------------------------------------------------------------------------
!!!! By default "Interiory proxy" and " Audio occulsion" are deactivated
----------------------------------------------------------------------------
----------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------ Interiory proxy -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[1] If you want to activate the file for "Interiory proxy" (it will allow to correct the players who disappear in the mapping)

[1.1] In the "fxmanifest" of the hospital : 

[1.2] delete -- in the ligne → --data_file 'INTERIOR_PROXY_ORDER_FILE' 'stream/interiorproxies.meta'

[1.3]To obtain :

data_file 'INTERIOR_PROXY_ORDER_FILE' 'interiorproxies.meta'

This will activate the INTERIOR_PROXY file



If you have already a file interiorproxies.meta for all your mlo, it will be necessary to add in this one

<Item>ocean_chiurgie1</Item>
<Item>mx_ocean_garage</Item>
<Item>xocean_escalier_2</Item>
<Item>xocean_escalier_1</Item>
<Item>amx_ocean_hospital</Item>
<Item>mx_ocean_shell_map_mlo</Item>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------ Audio occulsion -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[2] If you want to activate the file for "Audio occulsion"(warning, in Beta version and can cause problems with the audio when a player speaks)  (it avoids to hear the noise of the environment inside the Mlo)

[2.1]In the "fxmanifest" of the hospital :

[2.2] delete --    in ↓

--data_file 'AUDIO_GAMEDATA' 'audio/v_oceanml_game.dat' --dat151 --Audio occlusion
--data_file 'AUDIO_DYNAMIXDATA' 'audio/v_oceanml_mix.dat' -- dat15 --Audio occlusion

--'audio/v_oceanml_game.dat151.rel', --Audio occlusion
--'audio/v_oceanml_mix.dat15.rel',   --Audio occlusion

[2.3]To obtain :

data_file 'AUDIO_GAMEDATA' 'audio/v_oceanml_game.dat' --dat151 --Audio occlusion
data_file 'AUDIO_DYNAMIXDATA' 'audio/v_oceanml_mix.dat' -- dat15 --Audio occlusion

'audio/v_oceanml_game.dat151.rel', --Audio occlusion
'audio/v_oceanml_mix.dat15.rel',   --Audio occlusion

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------ Hotfix ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Hotfix 1.3.1

I deleted a file that should not be included in the mapping, I had added in the previous update without paying attention

Hotfix 1.3.0

add the basic GTAV props from the cafeteria area, to avoid loading the specific ipl
Props add unlock → mx_base_game_bar_table.ydr

Hotfix 1.2.9

fix unloading elevator
fix stair textures
fix props in +8 so that they don't move
fix props on the roof
fix door, surgery to garage

Hotfix 1.2.8

Fix of crach when the players were going in -2 area → chiurgy and garage
Fix no collision on the outside at the level of the flower boxes 
Fix loading effect of elevators doors
Occlusion audio deactivate by default because not yet optimal , but still activable in the fx manifest 

Hotfix 1.2.7

Occlusion modification:
Fix appearance and disappearance of the building when the player placed it in some place (helipad area and in front of the hospital)
Fix appearance and disappearance of the building when the player turns his camera
Fix appearance and disappearance of the building through the windows of the cafeteria

Adjustment of the road in front of the emergency room to fill a hole
Adjustment of the garage door outline + garage door
Adjustment of the door of elevators

Added files to activate the proxy interiors (.meta + line to activate in the fxmanifest) (deactivate by default)

Hotfix 1.2.6 
small bug correction

Hotfix 1.2.5 
- Fix, windows turned green or yellow at night
- Removal of 1 flying props above the helipad

Hotfix 1.2.4 
- lots of bug fixes, 
- texture adjustments, 
- Colision adjustment, 
- Addition of an external staircase next to the garage
- Addition of stairs on the roof

Hotfix 1.2.3 to download on your Cfx.re Keymaster account

Normally you have access to ytyp, ymap, Ytd etc...
I also added the audio occlusion files, I think you already had them actually. 
So you can test without if you have player crach, deleted in the .lua

data_file 'AUDIO_GAMEDATA' 'audio/v_oceanml_game.dat'
data_file 'AUDIO_DYNAMIXDATA' 'audio/v_oceanml_mix.dat'
audio/v_oceanml_game.dat151.rel
audio/v_oceanml_mix.dat15.rel

And I fixed some bugs fix portal , adjustment of lod distance