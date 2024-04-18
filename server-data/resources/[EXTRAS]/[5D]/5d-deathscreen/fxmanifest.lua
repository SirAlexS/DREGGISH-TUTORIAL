fx_version "cerulean"
game "gta5"
author "5d Development"
description "https://discord.gg/5d-scripts"
version "1.0.6"
lua54 "yes"
shared_scripts {"@es_extended/imports.lua", "config.lua", "/locale/*.lua"}
client_script "/client/client.lua"
server_script "/server/server.lua"
ui_page "/client/html/index.html"
files {"/client/html/**"}
dependencies {"es_extended", "esx_ambulancejob"}
escrow_ignore {"/locale/*.lua", "config.lua"}

dependency '/assetpacks'