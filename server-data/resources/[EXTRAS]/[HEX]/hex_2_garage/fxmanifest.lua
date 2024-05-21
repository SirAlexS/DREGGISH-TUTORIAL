fx_version 'cerulean'
author 'xLeon0666'
description 'Hex 2 Garage'
game 'gta5'
lua54 'yes'

client_scripts {
    'client/main.lua'
}

shared_scripts {
    'configs/config.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/main.lua'
}

ui_page 'html/index.html'

files {
    'html/**/'
}

escrow_ignore {
    'configs/config.lua'
}

dependencies {
    'hex_lib'
}
dependency '/assetpacks'