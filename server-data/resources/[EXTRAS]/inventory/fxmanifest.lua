fx_version 'cerulean'
game { 'gta5' }
lua54 'yes'

-- escrow_ignore {
--   'plugins/**/*',
--   'configs/*',
--   'locales.lua',
--   'esx.lua'
-- }

version '4.0.8'
description 'Inventory for FiveM'
author 'Chezza Studios'

ui_page 'web/dist/index.html'

files {
  'web/dist/index.html',
  'web/dist/assets/*.js',
  'web/dist/assets/*.css',
  'web/dist/assets/loader.svg',
  'web/dist/assets/items/*.*',
  'web/dist/assets/sounds/*'
}

shared_scripts {
  -- configs
  'configs/config.lua',
  'configs/config.*.lua',

  'api.lua',
  'esx.lua',
  'locales.lua'
} 

client_scripts {
  'client/main.lua',
  'client/functions.lua',
  'client/nui.lua',

  'plugins/**/cl_*.lua'
}

server_scripts {
  '@mysql-async/lib/MySQL.lua',
  'server/main.lua',
  'server/functions.lua',

  'plugins/**/sv_*.lua'
}

dependency {
  'mysql-async',
  'es_extended'
}
dependency '/assetpacks'