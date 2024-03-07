Config = {}

Config.Locale = 'de'

Config.Voice = {
    System = 'saltychat', -- pma | saltychat
    Ranges = { 1, 3.5, 8, 32 } -- PMA default only 3
}

Config.Waits = {
    Vehicle = 0,
    HideDefaultAmmo = true
}

Config.ServerName = '<span>DREGGISH</span> TUTORIAL'
Config.FoodHud = false
Config.Lifeinvader = 'Neue Werbung von'
Config.EnableBlackMoney = true
Config.KMHEnable = true -- if false it will mp/h instead of km/h
Config.OnlyDriverSpeedo = true

Config.Chat = {
    enabled = true,
    text = 'Write a message here...',
    keymapping = {
        command = 'openChat',
        desc = 'Open the Chat',
        mapper = 'keyboard',
        key = 't'
    }
}

Config.Permissions = {
    teamchat = {
        'pl',
        'superadmin',
        'admin'
    },

    announce = {
        'pl',
        'superadmin',
        'admin'
    }
}

Config.BlacklistedStrings = {
	"<",
	">",
	"script",
	"img",
	"video",
	"iframe",
	"audio",
	"mp3",
	"mp4",
	"ogg",
	"webm"
}

Config.NotifySound = {
    ["notify"] = {
        mp3 = false,
        gta = {
            audioName = 'ATM_WINDOW',
            audioRef = 'HUD_FRONTEND_DEFAULT_SOUNDSET'
        },
        url = 'sounds/alarm.mp3'
    },

    ["announce"] = {
        mp3 = false,
        gta = {
            audioName = 'CHALLENGE_UNLOCKED',
            audioRef = 'HUD_AWARDS'
        },
        url = 'sounds/alarm.mp3'
    }
}

Config.Commands = {
    ["id"] = {
        command = 'id',
        enabled = true
    },

    ["ids"] = {
        command = 'ids',
        enabled = true
    },

    ["ooc"] = {
        command = 'ooc',
        enabled = true
    },

    ["tc"] = {
        command = 'tc',
        enabled = true
    },

    ["announce"] = {
        command = 'announce',
        enabled = true
    }
}

Config.Locales = {
    ['de'] = {
        ['info'] = 'Information!',
        ['your_id'] = 'Deine Id Lautet: %s',
        ['no_player'] = 'Kein Spieler in der Nähe!',
        ['near_player_id'] = 'Seine Id Lautet: %s',
    },
    
    ['en'] = {
        ['info'] = 'Information!',
        ['your_id'] = 'Your Id Is: %s',
        ['no_player'] = 'No player nearby!',
        ['near_player_id'] = 'His Id Is: %s',
    }
}

Config.Weapons = {
    [joaat('WEAPON_POOLCUE')] = "Billiard-Kö",
    [joaat('WEAPON_DBSHOTGUN')] = "Doppelläufige Schrotflinte",
    [joaat('WEAPON_SNIPERRIFLE')] = "Scharfschützengewehr",
    [joaat('WEAPON_PUMPSHOTGUN')] = "Pumpgun",
    [joaat('WEAPON_DAGGER')] = "Dolch",
    [joaat('WEAPON_HEAVYRIFLE')] = "Schweres Gewehr",
    [joaat('WEAPON_SMG')] = "SMG",
    [joaat('WEAPON_ASSAULTRIFLE')] = "Kampfgewehr",
    [joaat('WEAPON_FLASHLIGHT')] = "Taschenlampe",
    [joaat('WEAPON_PISTOL')] = "Pistole",
    [joaat('WEAPON_GADGETPISTOL')] = "Gadget Pistol",
    [joaat('WEAPON_GRENADELAUNCHER_SMOKE')] = "Smoke Granatwerfer",
    [joaat('WEAPON_MUSKET')] = "Muskete",
    [joaat('WEAPON_STUNGUN')] = "Tazer",
    [joaat('WEAPON_NIGHTSTICK')] = "Schlagstock",
    [joaat('WEAPON_PISTOL_MK2')] = "Pistol MK2",
    [joaat('WEAPON_SNSPISTOL_MK2')] = "SNS Pistol MK2",
    [joaat('WEAPON_SNOWBALL')] = "Schneeball",
    [joaat('WEAPON_BOTTLE')] = "Flasche",
    [joaat('WEAPON_KNUCKLE')] = "Schlagring",
    [joaat('WEAPON_COMBATPDW')] = "Kampf PDW",
    [joaat('WEAPON_EMPLAUNCHER')] = "Kompakter EMP-Werfer",
    [joaat('WEAPON_HATCHET')] = "Axt",
    [joaat('WEAPON_BATTLEAXE')] = "Kampfaxt",
    [joaat('WEAPON_PISTOLXM3')] = "WM 29 Pistol",
    [joaat('WEAPON_GUSENBERG')] = "Gusenberg",
    [joaat('WEAPON_MOLOTOV')] = "Molotov Cocktail",
    [joaat('WEAPON_ASSAULTRIFLE_MK2')] = "Kampfgewehr MK2",
    [joaat('WEAPON_COMPACTLAUNCHER')] = "Kompakt Granatwerfer",
    [joaat('WEAPON_STUNGUN_MP')] = "Stungun MP",
    [joaat('WEAPON_FIREEXTINGUISHER')] = "Feuerlöscher",
    [joaat('WEAPON_SPECIALCARBINE')] = "Spezialkarabiner",
    [joaat('WEAPON_MICROSMG')] = "Mikro SMG",
    [joaat('WEAPON_HEAVYSHOTGUN')] = "Schwere Schrotflinte",
    [joaat('WEAPON_CARBINERIFLE')] = "Karabinergewehr",
    [joaat('WEAPON_ACIDPACKAGE')] = "Acid Packet",
    [joaat('WEAPON_BAT')] = "Schläger",
    [joaat('WEAPON_CANDYCANE')] = "Zuckerstange",
    [joaat('WEAPON_FLARE')] = "Leuchtpistole",
    [joaat('WEAPON_SMOKEGRENADE')] = "Rauchgranate",
    [joaat('WEAPON_SNSPISTOL')] = "SNS Pistole",
    [joaat('WEAPON_BALL')] = "Ball",
    [joaat('WEAPON_MINISMG')] = "Mini SMG",
    [joaat('WEAPON_PIPEBOMB')] = "Rohrbombe",
    [joaat('WEAPON_PROXMINE')] = "Annäherungsmine",
    [joaat('WEAPON_STICKYBOMB')] = "Haftbombe",
    [joaat('WEAPON_FIREWORK')] = "Feuerwerk",
    [joaat('WEAPON_BZGAS')] = "BZ Gas",
    [joaat('WEAPON_GRENADE')] = "Granate",
    [joaat('WEAPON_BULLPUPRIFLE')] = "Bullpupgewehr",
    [joaat('WEAPON_COMPACTRIFLE')] = "Kampfgewehr",
    [joaat('WEAPON_RAILGUNXM3')] = "Railgun",
    [joaat('WEAPON_PUMPSHOTGUN_MK2')] = "Pumpgun MK2",
    [joaat('WEAPON_SWITCHBLADE')] = "Klappmesser",
    [joaat('WEAPON_PISTOL50')] = "Pistole .50",
    [joaat('WEAPON_MARKSMANRIFLE')] = "Marksmangewehr",
    [joaat('WEAPON_RAYMINIGUN')] = "Witwenmacher",
    [joaat('WEAPON_REVOLVER_MK2')] = "Schwerer Revolver MK2",
    [joaat('WEAPON_COMBATPISTOL')] = "Kampfpistole",
    [joaat('WEAPON_MACHETE')] = "Machete",
    [joaat('WEAPON_APPISTOL')] = "AP Pistole",
    [joaat('WEAPON_HOMINGLAUNCHER')] = "Homing Launcher",
    [joaat('WEAPON_HAMMER')] = "Hammer",
    [joaat('WEAPON_CERAMICPISTOL')] = "Keramik Pistole",
    [joaat('WEAPON_MINIGUN')] = "Minigun",
    [joaat('WEAPON_HEAVYSNIPER_MK2')] = "Schweres Sniper MK2",
    [joaat('WEAPON_FLAREGUN')] = "Leuchtpistole",
    [joaat('WEAPON_SPECIALCARBINE_MK2')] = "Spezialkarabiner MK2",
    [joaat('WEAPON_MG')] = "MG",
    [joaat('WEAPON_GRENADELAUNCHER')] = "Granatwerfer",
    [joaat('WEAPON_PRECISIONRIFLE')] = "Präzisionsgewehr",
    [joaat('WEAPON_WRENCH')] = "Rohrzange",
    [joaat('WEAPON_DOUBLEACTION')] = "Double-Action Revolver",
    [joaat('WEAPON_MARKSMANRIFLE_MK2')] = "Marksmangewehr MK2",
    [joaat('WEAPON_RAILGUN')] = "Railgun",
    [joaat('WEAPON_SMG_MK2')] = "SMG MK2",
    [joaat('WEAPON_KNIFE')] = "Messer",
    [joaat('WEAPON_HEAVYPISTOL')] = "Schwere Pistole",
    [joaat('WEAPON_HEAVYSNIPER')] = "Schweres Sniper",
    [joaat('WEAPON_COMBATMG_MK2')] = "Kampf MG MK2",
    [joaat('WEAPON_COMBATMG')] = "Kampf MG",
    [joaat('WEAPON_RPG')] = "RPG",
    [joaat('WEAPON_CROWBAR')] = "Brecheisen",
    [joaat('WEAPON_TACTICALRIFLE')] = "Schweres Gewehr",
    [joaat('WEAPON_MARKSMANPISTOL')] = "Marksman Pistole",
    [joaat('WEAPON_COMBATSHOTGUN')] = "Combat-Schrotflinte",
    [joaat('WEAPON_BULLPUPRIFLE_MK2')] = "Bullpupgewehr MK2",
    [joaat('WEAPON_RAYCARBINE')] = "Unholy Hellbringer",
    [joaat('WEAPON_ADVANCEDRIFLE')] = "Advancedgewehr",
    [joaat('WEAPON_CARBINERIFLE_MK2')] = "Karabinergewehr MK2",
    [joaat('WEAPON_AUTOSHOTGUN')] = "Auto Schrotflinte",
    [joaat('WEAPON_PETROLCAN')] = "Benzinkanister",
    [joaat('WEAPON_BULLPUPSHOTGUN')] = "Bullpup Schrotflinte",
    [joaat('WEAPON_ASSAULTSHOTGUN')] = "Kampf Schrotflinte",
    [joaat('WEAPON_SAWNOFFSHOTGUN')] = "Abgesägte Schrotflinte",
    [joaat('WEAPON_TECPISTOL')] = "Taktisches SMG",
    [joaat('WEAPON_MACHINEPISTOL')] = "Maschinenpistole",
    [joaat('WEAPON_RAYPISTOL')] = "Alienpistole",
    [joaat('GADGET_PARACHUTE')] = "Fallschirm",
    [joaat('WEAPON_VINTAGEPISTOL')] = "Vintage Pistole",
    [joaat('WEAPON_NAVYREVOLVER')] = "Navy Revolver",
    [joaat('WEAPON_STONE_HATCHET')] = "Katana",
    [joaat('WEAPON_ASSAULTSMG')] = "Kampf SMG",
    [joaat('WEAPON_GOLFCLUB')] = "Golfschläger",
    [joaat('WEAPON_MILITARYRIFLE')] = "Schweres Gewehr",
    [joaat('WEAPON_REVOLVER')] = "Schwerer Revolver",
}