fx_version 'cerulean'
author 'xLeon0666'
description 'Hex 2 Vehicleshop'
game 'gta5'
lua54 'yes'

client_scripts {
    'client/main.lua',
    'client/utils.lua'
}

shared_scripts {
    'configs/config.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'configs/server_config.lua',
    'server/main.lua'
}

ui_page 'html/index.html'

files {
    'html/**/'
}

escrow_ignore {
    'configs/config.lua',
    'configs/server_config.lua',
    'client/utils.lua'
}

dependencies {
    'hex_lib'
}
dependency '/assetpacks'