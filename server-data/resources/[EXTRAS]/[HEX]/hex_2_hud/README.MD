<!-- exports client side only -->

<!-- NOTIFY -->
    Notify type can be success info error
    timeout in ms

    exports['hex_2_hud']:Notify(title, message, type, timeout)

    example:
        -> exports['hex_2_hud']:Notify('Your id:', '5', 'info', 5000)

timeout in ms

<!-- Lifeinvader -->
    timeout in ms

    exports['hex_2_hud']:Lifeinvader(rpName, phoneNumber, message, timeout)

    example:
        -> exports['hex_2_hud']:Lifeinvader('Max Mustermann', '318201', 'Selling 20 Phones', 5000)

timeout in ms

<!-- ANNOUNCE -->
    exports['hex_2_hud']:Announce(title, message, timeout)

    example:
        -> exports['hex_2_hud']:Announce('Announce', 'Your server will be restarted in a few minutes', 5000)

<!-- HIDE HUD -->

exports['hex_2_hud']:HideHud(true or false)

<!-- HELP NOTIFY -->
    exports['hex_2_hud']:HelpNotify(message, key)

    example:
        -> exports['hex_2_hud']:HelpNotify('Press E To open the Shop', 'E')

<!-- Client and Server events -->

<!-- NOTIFY -->
    Notify type can be success info error
    timeout in ms

    TriggerEvent('hex_hud:notify', title, message, type, timeout)

    example:
        -> TriggerEvent('hex_hud:notify', 'Your id:', '5', 'info', 5000)

<!-- Lifeinvader -->
    timeout in ms

    TriggerEvent('hex_2_hud:lifeinvader', rpName, phoneNumber, message, timeout)

    example:
        -> TriggerEvent('hex_2_hud:lifeinvader', 'Max Mustermann', '318201', 'Selling 20 Phones', 5000)

timeout in ms

<!-- ANNOUNCE -->
    TriggerEvent('hex_hud:announce', title, message, timeout)

    example:
        -> TriggerEvent('hex_hud:announce', 'Announce', 'Your server will be restarted in a few minutes', 5000)

<!-- HIDE HUD -->

TriggerEvent('hex_hud:hidehud', true or false)