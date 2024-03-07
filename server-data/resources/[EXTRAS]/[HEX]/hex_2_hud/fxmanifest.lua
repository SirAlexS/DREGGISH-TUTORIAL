fx_version 'cerulean'
author 'xLeon0666'
description 'Hex 2 Hud'
game 'gta5'
lua54 'yes'

client_scripts {
    'client/main.lua',
    'client/voice.lua',
    'client/food.lua'
}

shared_scripts {
    'configs/config.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/main.lua'
}

ui_page 'dist/index.html'
-- ui_page 'http://localhost:5173'

files {
    'dist/**/'
}

escrow_ignore {
    'client/voice.lua',
    'client/food.lua',
    'configs/config.lua'
}

dependencies {
    'hex_lib'
}
dependency '/assetpacks'