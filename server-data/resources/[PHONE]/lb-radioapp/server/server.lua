local lib = exports.loaf_lib:GetLib()
local pma = exports["pma-voice"]

lib.RegisterCallback("lb-radioapp:getMembers", function(source, cb, frequency)
    cb(pma:getPlayersInRadioChannel(frequency))
end)