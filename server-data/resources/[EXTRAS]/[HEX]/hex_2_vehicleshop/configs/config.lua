Config = {}

Config.Locale = 'de'
Config.LoadDefaultIPL = true

Config.Triggers = {
    retrieveJobVehicles = 'hex_vehicleshop:retrieveJobVehicles',
    isPlateTaken = 'hex_vehicleshop:isPlateTaken',
    setJobVehicleState = 'hex_vehicleshop:setJobVehicleState'
}    

Config.Vehicles = {
    ['normal'] = {
        name = 'vehicle',
        label = 'Vehicle Shop',
        position = vector3(-57.1572, -1096.1903, 26.4224),
        camPosition = vector3(-52.3667, -1095.0632, 27.4223),
        camRotation = vector3(1.0, 0.0, 250.0568),
        vehicleSpawn = vector3(-41.3816, -1098.7827, 26.4223),
        vehicleHeading = 87.4103,
        testVehicle = vector3(-45.1389, -1076.2151, 26.7114),
        testHeading = 70.1155,
        resellVehicleEnabled = true,
        resellVehicle = vector3(-44.9451, -1082.6250, 26.6854),

        blip = {
            sprite = 326,
            scale = 0.8,
            text = 'Premium Deluxe Autohaus'
        },

        marker = {
            enabled = true,
            type = 0,
            color = { red = 250, blue = 0, green = 0, alpha = 100 }
        },

        resellMarker = {
            enabled = true,
            type = 0,
            color = { red = 250, blue = 0, green = 0, alpha = 100 }
        },

        categorys = {
            { name = 'compacts', label = 'Compacts' },
            { name = 'coupes', label = 'Coupés' },
            { name = 'muscle', label = 'Muscle' },
            { name = 'offroad', label = 'Off Road' },
            { name = 'sedans', label = 'Sedans' },
            { name = 'sports', label = 'Sports' },
            { name = 'sportsclassics', label = 'Sports Classics' },
            { name = 'super', label = 'Super' },
            { name = 'suvs', label = 'SUVs' },
            { name = 'vans', label = 'Vans' }
        },

        vehicles = {
            { name = 'blista', label = 'Blista', category = 'compacts', price = 15000, resellPrice = 0.75, type = 'car' },
            { name = 'brioso', label = 'Brioso R/A', category = 'compacts', price = 180, resellPrice = 0.75, type = 'car' },
            { name = 'issi2', label = 'Issi', category = 'compacts', price = 900, resellPrice = 0.75, type = 'car' },
            { name = 'panto', label = 'Panto', category = 'compacts', price = 500, resellPrice = 0.75, type = 'car' },

            { name = 'cogcabrio', label = 'Cognoscenti Cabrio', category = 'coupes', price = 1100, resellPrice = 0.75, type = 'car' },
            { name = 'felon', label = 'Felon', category = 'coupes', price = 1200, resellPrice = 0.75, type = 'car' },
            { name = 'felon2', label = 'Felon GT', category = 'coupes', price = 1500, resellPrice = 0.75, type = 'car' },
            { name = 'sentinel2', label = 'Sentinel XS', category = 'coupes', price = 1600, resellPrice = 0.75, type = 'car' },
            { name = 'f620', label = 'F620', category = 'coupes', price = 1600, resellPrice = 0.75, type = 'car' },
            { name = 'zion', label = 'Zion', category = 'coupes', price = 1800, resellPrice = 0.75, type = 'car' },
            { name = 'exemplar', label = 'Exemplar', category = 'coupes', price = 1800, resellPrice = 0.75, type = 'car' },
            { name = 'jackal', label = 'Jackal', category = 'coupes', price = 2000, resellPrice = 0.75, type = 'car' },
            { name = 'zion2', label = 'Zion Cabrio', category = 'coupes', price = 2200, resellPrice = 0.75, type = 'car' },

            { name = 'blade', label = 'Blade', category = 'muscle', price = 250, resellPrice = 0.75, type = 'car' },
            { name = 'picador', label = 'Picador', category = 'muscle', price = 400, resellPrice = 0.75, type = 'car' },
            { name = 'tampa', label = 'Tampa', category = 'muscle', price = 600, resellPrice = 0.75, type = 'car' },
            { name = 'faction', label = 'Faction', category = 'muscle', price = 600, resellPrice = 0.75, type = 'car' },
            { name = 'dukes', label = 'Dukes', category = 'muscle', price = 600, resellPrice = 0.75, type = 'car' },
            { name = 'buccaneer', label = 'Buccaneer', category = 'muscle', price = 600, resellPrice = 0.75, type = 'car' },
            { name = 'voodoo', label = 'Voodoo', category = 'muscle', price = 600, resellPrice = 0.75, type = 'car' },
            { name = 'chino', label = 'Chino', category = 'muscle', price = 700, resellPrice = 0.75, type = 'car' },
            { name = 'sabregt', label = 'Sabre Turbo', category = 'muscle', price = 800, resellPrice = 0.75, type = 'car' },
            { name = 'dominator', label = 'Dominator', category = 'muscle', price = 800, resellPrice = 0.75, type = 'car' },
            { name = 'gauntlet', label = 'Gauntlet', category = 'muscle', price = 800, resellPrice = 0.75, type = 'car' },
            { name = 'phoenix', label = 'Phoenix', category = 'muscle', price = 800, resellPrice = 0.75, type = 'car' },
            { name = 'buccaneer2', label = 'Buccaneer Rider', category = 'muscle', price = 800, resellPrice = 0.75, type = 'car' },
            { name = 'nightshade', label = 'Nightshade', category = 'muscle', price = 900, resellPrice = 0.75, type = 'car' },
            { name = 'faction2', label = 'Faction Rider', category = 'muscle', price = 1000, resellPrice = 0.75, type = 'car' },
            { name = 'chino2', label = 'Chino Luxe', category = 'muscle', price = 1000, resellPrice = 0.75, type = 'car' },
            { name = 'sabregt2', label = 'Sabre GT', category = 'muscle', price = 1200, resellPrice = 0.75, type = 'car' },
            { name = 'faction3', label = 'Faction XL', category = 'muscle', price = 1400, resellPrice = 0.75, type = 'car' },
            { name = 'hotknife', label = 'Hotknife', category = 'muscle', price = 3000, resellPrice = 0.75, type = 'car' },
            { name = 'yosemite', label = 'Yosemite', category = 'muscle', price = 3500, resellPrice = 0.75, type = 'car' },
            { name = 'coquette3', label = 'Coquette BlackFin', category = 'muscle', price = 3500, resellPrice = 0.75, type = 'car' },
            { name = 'deville74', label = 'Deville', category = 'muscle', price = 5000, resellPrice = 0.75, type = 'car' },

            { name = 'hustler', label = 'Hustler', category = 'muscle', price = 5000, resellPrice = 0.75, type = 'car' },
            { name = 'hermes', label = 'Hermes', category = 'muscle', price = 5350, resellPrice = 0.75, type = 'car' },

            { name = 'blazer', label = 'Blazer', category = 'offroad', price = 65, resellPrice = 0.75, type = 'car' },
            { name = 'blazer4', label = 'Blazer Sport', category = 'offroad', price = 150, resellPrice = 0.75, type = 'car' },
            { name = 'rebel2', label = 'Rebel', category = 'offroad', price = 800, resellPrice = 0.75, type = 'car' },
            { name = 'sandking', label = 'Sandking', category = 'offroad', price = 1800, resellPrice = 0.75, type = 'car' },
            { name = 'kamacho', label = 'Kamacho', category = 'offroad', price = 3200, resellPrice = 0.75, type = 'car' },
            { name = 'foxcoma', label = 'Foxcoma', category = 'offroad', price = 5000, resellPrice = 0.75, type = 'car' },
            { name = 'dubsta3', label = 'Dubsta 6x6', category = 'offroad', price = 5000, resellPrice = 0.75, type = 'car' },

            { name = 'asea', label = 'Asea', category = 'sedans', price = 300, resellPrice = 0.75, type = 'car' },
            { name = 'regina', label = 'Regina', category = 'sedans', price = 500, resellPrice = 0.75, type = 'car' },
            { name = 'washington', label = 'Washington', category = 'sedans', price = 500, resellPrice = 0.75, type = 'car' },
            { name = 'emperor', label = 'Emperor', category = 'sedans', price = 600, resellPrice = 0.75, type = 'car' },
            { name = 'primo2', label = 'Primo Custom', category = 'sedans', price = 1000, resellPrice = 0.75, type = 'car' },
            { name = 'fugitive', label = 'Fugitive', category = 'sedans', price = 1100, resellPrice = 0.75, type = 'car' },
            { name = 'schafter2', label = 'Schafter', category = 'sedans', price = 1400, resellPrice = 0.75, type = 'car' },
            { name = 'cognoscenti', label = 'Cognoscenti', category = 'sedans', price = 3500, resellPrice = 0.75, type = 'car' },
            { name = 'stretch', label = 'Stretch', category = 'sedans', price = 7000, resellPrice = 0.75, type = 'car' },

            { name = 'jugular', label = 'Jugular', category = 'sports', price = 250, resellPrice = 0.75, type = 'car' },
            { name = 'drafter', label = 'Drafter', category = 'sports', price = 500, resellPrice = 0.75, type = 'car' },
            { name = 'revolter', label = 'Revolter', category = 'sports', price = 600, resellPrice = 0.75, type = 'car' },
            { name = 'buffalo', label = 'Buffalo', category = 'sports', price = 900, resellPrice = 0.75, type = 'car' },
            { name = 'fusilade', label = 'Fusilade', category = 'sports', price = 1000, resellPrice = 0.75, type = 'car' },
            { name = 'bestiagts', label = 'Bestia GTS', category = 'sports', price = 1000, resellPrice = 0.75, type = 'car' },
            { name = 'banshee', label = 'Banshee', category = 'sports', price = 1200, resellPrice = 0.75, type = 'car' },
            { name = 'buffalo2', label = 'Buffalo S', category = 'sports', price = 1200, resellPrice = 0.75, type = 'car' },
            { name = 'rapidgt', label = 'Rapid GT', category = 'sports', price = 1500, resellPrice = 0.75, type = 'car' },
            { name = 'alpha', label = 'Alpha', category = 'sports', price = 1500, resellPrice = 0.75, type = 'car' },
            { name = 'elegy2', label = 'Elegy', category = 'sports', price = 1500, resellPrice = 0.75, type = 'car' },
            { name = 'rapidgt2', label = 'Rapid GT Convertible', category = 'sports', price = 1800, resellPrice = 0.75, type = 'car' },
            { name = 'lynx', label = 'Lynx', category = 'sports', price = 1800, resellPrice = 0.75, type = 'car' },
            { name = 'coquette', label = 'Coquette', category = 'sports', price = 2000, resellPrice = 0.75, type = 'car' },
            { name = 'omnis', label = 'Omnis', category = 'sports', price = 2100, resellPrice = 0.75, type = 'car' },
            { name = 'seven70', label = 'Seven 70', category = 'sports', price = 2200, resellPrice = 0.75, type = 'car' },
            { name = 'feltzer2', label = 'Feltzer', category = 'sports', price = 2200, resellPrice = 0.75, type = 'car' },
            { name = 'comet2', label = 'Comet', category = 'sports', price = 2500, resellPrice = 0.75, type = 'car' },
            { name = 'massacro2', label = 'Massacro(Racecar)', category = 'sports', price = 2500, resellPrice = 0.75, type = 'car' },
            { name = 'sentinel3', label = 'Sentinel3', category = 'sports', price = 3000, resellPrice = 0.75, type = 'car' },
            { name = 'tampa2', label = 'Drift Tampa', category = 'sports', price = 3000, resellPrice = 0.75, type = 'car' },
            { name = 'furoregt', label = 'Furore GT', category = 'sports', price = 3200, resellPrice = 0.75, type = 'car' },
            { name = 'carbonizzare', label = 'Carbonizzare', category = 'sports', price = 3500, resellPrice = 0.75, type = 'car' },
            { name = 'schafter3', label = 'Schafter V12', category = 'sports', price = 3500, resellPrice = 0.75, type = 'car' },
            { name = 'comet5', label = 'Comet 5', category = 'sports', price = 4000, resellPrice = 0.75, type = 'car' },
            { name = 'jester', label = 'Jester', category = 'sports', price = 4500, resellPrice = 0.75, type = 'car' },
            { name = 'mamba', label = 'Mamba', category = 'sports', price = 5000, resellPrice = 0.75, type = 'car' },
            { name = 'jester2', label = 'Jester(Racecar)', category = 'sports', price = 6000, resellPrice = 0.75, type = 'car' },

            { name = 'casco', label = 'Casco', category = 'sportsclassics', price = 800, resellPrice = 0.75, type = 'car' },
            { name = 'btype3', label = 'Btype Luxe', category = 'sportsclassics', price = 2500, resellPrice = 0.75, type = 'car' },
            { name = 'coquette2', label = 'Coquette Classic', category = 'sportsclassics', price = 3000, resellPrice = 0.75, type = 'car' },
            { name = 'z190', label = 'Z190', category = 'sportsclassics', price = 3000, resellPrice = 0.75, type = 'car' },
            { name = 'stingergt', label = 'Stinger GT', category = 'sportsclassics', price = 3200, resellPrice = 0.75, type = 'car' },
            { name = 'btype', label = 'Btype', category = 'sportsclassics', price = 3200, resellPrice = 0.75, type = 'car' },
            { name = 'feltzer3', label = 'Stirling GT', category = 'sportsclassics', price = 3500, resellPrice = 0.75, type = 'car' },
            { name = 'gt500', label = 'GT 500', category = 'sportsclassics', price = 3500, resellPrice = 0.75, type = 'car' },
            { name = 'ztype', label = 'Z-Type', category = 'sportsclassics', price = 5000, resellPrice = 0.75, type = 'car' },
            { name = 'retinue', label = 'Retinue', category = 'sportsclassics', price = 6000, resellPrice = 0.75, type = 'car' },

            { name = 'sultanrs', label = 'Sultan RS', category = 'super', price = 450, resellPrice = 0.75, type = 'car' },
            { name = 'banshee2', label = 'Banshee 900R', category = 'super', price = 2550, resellPrice = 0.75, type = 'car' },

            { name = 'fq2', label = 'Fhantom', category = 'suvs', price = 1000, resellPrice = 0.75, type = 'car' },
            { name = 'xls', label = 'XLS', category = 'suvs', price = 1500, resellPrice = 0.75, type = 'car' },
            { name = 'cavalcade2', label = 'Cavalcade', category = 'suvs', price = 1500, resellPrice = 0.75, type = 'car' },
            { name = 'baller2', label = 'Baller', category = 'suvs', price = 2000, resellPrice = 0.75, type = 'car' },
            { name = 'mesa', label = 'Mesa', category = 'suvs', price = 2100, resellPrice = 0.75, type = 'car' },
            { name = 'dubsta', label = 'Dubsta', category = 'suvs', price = 2400, resellPrice = 0.75, type = 'car' },
            { name = 'baller3', label = 'Baller Sport', category = 'suvs', price = 2500, resellPrice = 0.75, type = 'car' },
            { name = 'contender', label = 'Contender', category = 'suvs', price = 3000, resellPrice = 0.75, type = 'car' },
            { name = 'dubsta2', label = 'Dubsta Luxuary', category = 'suvs', price = 3000, resellPrice = 0.75, type = 'car' },
            { name = 'mesa3', label = 'Mesa Trail', category = 'suvs', price = 3500, resellPrice = 0.75, type = 'car' },
            { name = 'dongfeng140', label = 'Dongfeng', category = 'suvs', price = 15000, resellPrice = 0.75, type = 'car' },
            { name = 'granger', label = 'Grabger', category = 'suvs', price = 5500, resellPrice = 0.75, type = 'car' },

            { name = 'burrito3', label = 'Burrito', category = 'vans', price = 500, resellPrice = 0.75, type = 'car' },
            { name = 'surfer', label = 'Surfer', category = 'vans', price = 400, resellPrice = 0.75, type = 'car' },
            { name = 'journey', label = 'Journey', category = 'vans', price = 250, resellPrice = 0.75, type = 'car'},
            { name = 'gburrito2', label = 'Burrito', category = 'vans', price = 1500, resellPrice = 0.75, type = 'car' },
            { name = 'moonbeam2', label = 'Moonbeam Rider', category = 'vans', price = 1400, resellPrice = 0.75, type = 'car' },
            { name = 'bison', label = 'Bison', category = 'vans', price = 1500, resellPrice = 0.75, type = 'car' },
            { name = 'slamvan3', label = 'Slam Van', category = 'vans', price = 1500, resellPrice = 0.75, type = 'car' },
            { name = 'rumpo3', label = 'Rumpo Trail', category = 'vans', price = 3000, resellPrice = 0.75, type = 'car' },
            { name = 'bobcatxl', label = 'Bobcat XL', category = 'vans', price = 800, resellPrice = 0.75, type = 'car' }
        }
    },
}

Config.TestDriveEnabled = true
Config.TestDrive = 120 -- In Seconds
Config.TestPlate = 'DREGGISH'
Config.ShowSeconds = true
Config.AnotherDimension = true

Config.Locales = {
    ['de'] = {
        ['press'] = 'Drücke ~INPUT_CONTEXT~ um denn Vehicle Shop zu öffnen!',
        ['resellPress'] = 'Drücke ~INPUT_CONTEXT~ um dein Auto zu verkaufen!',
        ['buyVehicle'] = 'Du hast ein Fahrzeug gekauft.',
        ['nomoney'] = 'Du hast nicht genügend Geld!',
        ['testdrive'] = 'Du hast %s Sekunden für eine Test Fahrt!',
        ['testdriveseconds'] = 'Du hast noch ~r~%s~w~ Sekunden für deine Testfahrt',
        ['testdrivefinish'] = 'Test Fahrt beendet!',
        ['novehicle'] = 'Du bist in keinem Auto!',

        ['buyVehicle'] = 'Ein Fahrzeug mit dem Nummernschild %s gehört jetzt dir!',
        ['dontHave'] = 'Dieses Fahrzeug gehört nicht dir!',
        ['sellVehicle'] = 'Du hast dein Fahrzeug für %s$ verkauft!',
        ['cantSell'] = 'Dieses Fahrzeug kannst du hier nicht verkaufen!',

        ['webhook_date'] = "Am %s um %s",
        ['webhook_buy_title'] = 'Fahrzeug Kauf',
        ['webhook_buy_message'] = 'Der Spieler kauft sich das Auto **%s** (%s) für **%s**$',
        ['webhook_sell_title'] = 'Fahrzeug verkauf',
        ['webhook_sell_message'] = 'Der Spieler verkauft das Auto **%s** (%s) für **%s**$',
    },

    ['en'] = {
        
    }
}

function drawText(text)
    SetTextFont(0)
    SetTextProportional(1)
    SetTextScale(0.0, 0.3)
    SetTextColour(255, 255, 255, 255)
    SetTextDropshadow(0, 0, 0, 0, 255)
    SetTextEdge(1, 0, 0, 0, 255)
    SetTextDropShadow()
    SetTextOutline()
    SetTextEntry('STRING')
    AddTextComponentString(text)
    DrawText(0.40, 0.970)
end

function DrawHelpNotify(message)
    SetTextComponentFormat('STRING')
    AddTextComponentString(message)
    DisplayHelpTextFromStringLabel(0, 0, 1, -1)
end

function Notify(title, message, type, timeout)
    TriggerEvent('hex_hud:notify', title, message, type, timeout)
end