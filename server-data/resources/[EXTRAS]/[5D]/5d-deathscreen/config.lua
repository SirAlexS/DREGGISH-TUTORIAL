_CONFIG = 
{
    locale = "de",
    bleedOutTimeSeconds = 600, -- Seconds until player is force-respawned.
    earlyRespawnTimeSeconds = 300, -- Second at which player can manually respawn. Can't be higher than bleedOutTime. Set to 0 to disable.
    resyncCooldownSeconds = 10,
    enableDeathCam = true, -- enable/disable fixed deathcam
    enableDeathBlur = true, -- enable/disable motion blur on death
    waitForServerDeathStatus = false, -- Set this to true, if you don't want the deathscreen to show up until "esx_ambulancejob:setDeathStatus" is called with the value "true"
                                      -- Useful if you have steps between "player alive" and "player is dead", where the deathscreen is not supposed to show up yet.
                                      -- For most people, it is recommended to not touch this and leave it at "false".

    useDimensionWhitelist = true, -- true: use dimension whitelist. false: use dimension blacklist.
    dimensionBlacklist = {27, 3, 15}, -- if player dies in one of these dimensions, the deathscreen will not be triggered. useful for ffa/gangwar etc.
    dimensionWhitelist = {0, 1}, -- if player dies in any dimension other than the ones specified, the deathscreen will not be triggered. useful for ffa/gangwar etc.
    showDeathscreen = function(playerDimension) -- add your own checks to decide when not to show the deathscreen. allows usage of ffa/gangwar exports to check if player is in ffa. also has access to player's dimension.
        return true -- Always show Deathscreen. Add condition and return false to stop deathscreen from showing.
    end,

    Keys = -- Don't forget to also change the displayed keys in the UI.
    {
        dispatchKey = 47,
        syncKey = 303,
        respawnKey = 38
    },

    RespawnPoints = -- Will choose the closest respawn point.
    {
        vector4(-1839.5306, -358.7013, 49.4279, 15.00), -- Central Los Santos
        --vector4(1836.03, 3670.99, 34.28, 296.06) -- Sandy Shores
    },

    DeathCauseRules = -- Set rules based on players death cause. 
    -- @deathCaueses: List of all death cause hashes that trigger the rule.
    -- @modifiedBleedOutTime (optional): Set a different bleedout time for player.
    -- @disallowDispatch: Disallow player from sending a dispatch if set to true.
    -- @disallowEarlyRespawn: Disallow player from respawning early if set to true.
    -- @allowRespawnAtPlaceOfDeath: Allow player to respawn at their place of death instead of the closest hospital if set to true. Allows them to keep their inventory.
    {
        deathByFallDamage =
        {
            deathCauses = {-842959696},
            --modifiedBleedOutTime = 900,
            disallowDispatch = false,
            disallowEarlyRespawn = false,
            allowRespawnAtPlaceOfDeath = false
        },

        deathByMelee = 
        {
            deathCauses = {-1569615261, 1737195953, 1317494643, -1786099057, 1141786504, -2067956739, -868994466},
            --modifiedBleedOutTime = 900,
            disallowDispatch = false,
            disallowEarlyRespawn = false,
            allowRespawnAtPlaceOfDeath = false
        },

        deathByKnife = 
        {
            deathCauses = {-1716189206, 1223143800, -1955384325, -1833087301, 910830060},
            --modifiedBleedOutTime = 900,
            disallowDispatch = false,
            disallowEarlyRespawn = false,
            allowRespawnAtPlaceOfDeath = false
        },

        deathByBullet = 
        {
            deathCauses = {453432689, 1593441988, 584646201, -1716589765, 324215364, 736523883, -270015777, -1074790547, -2084633992, -1357824103, -1660422300, 2144741730, 487013001, 2017895192,
                           -494615257, -1654528753, 100416529, 205991906, 1119849093},
            --modifiedBleedOutTime = 900,
            disallowDispatch = false,
            disallowEarlyRespawn = false,
            allowRespawnAtPlaceOfDeath = false
        },

        deathByAnimal = 
        {
            deathCauses = {-100946242, 148160082},
            --modifiedBleedOutTime = 900,
            disallowDispatch = false,
            disallowEarlyRespawn = false,
            allowRespawnAtPlaceOfDeath = false
        },

        deathByExplosion = 
        {
            deathCauses = {-1568386805, 1305664598, -1312131151, 375527679, 324506233, 1752584910, -1813897027, 741814745, -37975472, 539292904, 341774354, -1090665087},
            --modifiedBleedOutTime = 900,
            disallowDispatch = false,
            disallowEarlyRespawn = false,
            allowRespawnAtPlaceOfDeath = false
        },

        deathByGas = 
        {
            deathCauses = {-1600701090},
            --modifiedBleedOutTime = 900,
            disallowDispatch = false,
            disallowEarlyRespawn = false,
            allowRespawnAtPlaceOfDeath = false
        },

        deathByBurn = 
        {
            deathCauses = {615608432, 883325847, -544306709},
            --modifiedBleedOutTime = 900,
            disallowDispatch = false,
            disallowEarlyRespawn = false,
            allowRespawnAtPlaceOfDeath = false
        },

        deathByDrown = 
        {
            deathCauses = {-10959621, 1936677264},
            --modifiedBleedOutTime = 900,
            disallowDispatch = false,
            disallowEarlyRespawn = false,
            allowRespawnAtPlaceOfDeath = false
        },

        deathByCar = 
        {
            deathCauses = {133987706, -1553120962},
            --modifiedBleedOutTime = 900,
            disallowDispatch = false,
            disallowEarlyRespawn = false,
            allowRespawnAtPlaceOfDeath = false
        } 
    }

}

if (not IsDuplicityVersion()) then
    -- Notify event. Can be replaced.
    ---@param message string Message to be displayed for the notify.
    ---@param type string Notify type. Either success or errror.
    RegisterNetEvent("5d-deathscreen:notify", function(message, type)
        ESX.ShowNotification(message)
    end)
end

_LOCALE = {} -- dont touch
