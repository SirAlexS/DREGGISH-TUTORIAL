-- Resource Metadata
fx_version 'cerulean'
game 'gta5'


author 'Discord : Mxaizen#0021'
description 'Ocean Medical Center Hospital OMC'
version '1.3.1'

this_is_a_map 'yes'

data_file 'AUDIO_GAMEDATA' 'audio/doorsounds_game.dat'--doors sounds
data_file 'SCALEFORM_DLC_FILE' 'stream/minimap/int2439777779.gfx' --custom Minimap
--data_file 'AUDIO_GAMEDATA' 'audio/v_oceanml_game.dat' --dat151 --Audio occlusion
--data_file 'AUDIO_DYNAMIXDATA' 'audio/v_oceanml_mix.dat' -- dat15 --Audio occlusion
--data_file 'INTERIOR_PROXY_ORDER_FILE' 'stream/interiorproxies.meta'

files {
  'audio/doorsounds_game.dat151.rel', --doors sounds
--'audio/v_oceanml_game.dat151.rel', --Audio occlusion
--'audio/v_oceanml_mix.dat15.rel',   --Audio occlusion
}

-- files should be not protected by the escrow system
escrow_ignore {
  'stream/sm_01_0.ybn',
  'stream/sm_rd_1.ybn',
  'stream/hi@sm_01_0.ybn',
  'stream/hism_01_0.ybn',

  'stream/sm_01_ground2.ydr',
  'stream/sm_rd_01_r1f.ydr',
  'stream/sm_01_ground_decal6.ydr',
  'stream/sm_01_tower_base.ydr',
  'stream/sm_01_ground_decal001.ydr',
  'stream/sm_01_tower1.ydr',
  'stream/sm_01_emissive_sm_01b.ydr',
  'stream/sm_01_emissive_sm_01.ydr',
  'stream/sm_01_tower2.ydr',
  'stream/sm_rd_01_r1e.ydr',
  'mx_base_game_bar_table.ydr',

  'stream/mx_ocean_hospital_shell_1+hi.ytd',
  'stream/mx_ocean_hospital_shell_1.ytd',
  'stream/mx_oceantexture+hi.ytd',
  'stream/mx_oceantexture.ytd',
  'stream/mx_oceangarage+hi.ytd',
  'stream/mx_oceangarage.ytd',
  'stream/mx_lampe_r1+hi.ytd',
  'stream/mx_lampe_r1.ytd',
  'stream/mx_ocean_hospital_escalier+hi.ytd',
  'stream/mx_ocean_hospital_escalier.ytd',
  'stream/mx_ocean_hospital_lod.ytd',

  'stream/**/*.ytyp',
  'stream/**/*.ymap',
  'stream/**/*.ydd',
  'stream/**/*.ymf'
}

dependency '/assetpacks'