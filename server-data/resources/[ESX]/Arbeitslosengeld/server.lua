print("Servercode wurde erfolgreich geladen.")


RegisterServerEvent('getPayment')
AddEventHandler('getPayment', function()
    local source = source
    print("Spieler versucht, Zahlung zu erhalten. Source:", source)
    local identifier = GetPlayerIdentifier(source, 0)

    -- Überprüfe, ob der Spieler den Cooldown abgelaufen hat
    local lastPaymentTime = exports.oxmysql:fetchScalar('SELECT last_payment FROM users WHERE identifier = ?', {identifier})

    local currentTime = os.time()
    local cooldownTime = lastPaymentTime + (Config.cooldownHours * 3600)

    if currentTime >= cooldownTime then
        -- Zähle Geld zum Bankkonto des Spielers hinzu
        exports.oxmysql:execute('UPDATE users SET bank = bank + ? WHERE identifier = ?', {Config.paymentAmount, identifier})

        -- Setze den neuen Zahlungszeitpunkt
        exports.oxmysql:execute('UPDATE users SET last_payment = ? WHERE identifier = ?', {currentTime, identifier})

        TriggerClientEvent('paymentReceived', source, Config.paymentAmount)
    else
        TriggerClientEvent('paymentCooldown', source, cooldownTime - currentTime)
    end
end)

