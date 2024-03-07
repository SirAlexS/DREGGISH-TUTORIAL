fx_version 'cerulean'
author 'xLeon0666'
description 'Hex Lib'
game 'gta5'
lua54 'yes'

client_scripts {
    'client/main.lua',
    'client/framework/**.lua'
}

shared_scripts {
    'config.lua'
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/main.lua',
    'server/framework/**.lua',
}

escrow_ignore {
    'client/**.lua',
    'server/**.lua',
    'config.lua'
}
dependency '/assetpacks'