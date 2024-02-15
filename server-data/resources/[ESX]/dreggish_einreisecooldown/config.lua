Config = {}

-- Cooldown-Zeit in Sekunden
Config.cooldownTime = 30

-- Benutzergruppen, die den Cooldown von Spielern entfernen dürfen
Config.allowedUserGroupsRemoveCooldown = {
    'admin',
    'superadmin',
}

-- Benutzergruppen, die den Cooldown von Spielern manuell setzen dürfen
Config.allowedUserGroupsSetCooldown = {
    'superadmin',
}

Config.allowedUserGroups = {
    removeCooldown = Config.allowedUserGroupsRemoveCooldown,
    setCooldown = Config.allowedUserGroupsSetCooldown,
}
