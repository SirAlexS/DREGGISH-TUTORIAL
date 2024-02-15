-- Tabelle für den Einreisecooldown
CREATE TABLE IF NOT EXISTS einreisecooldown (
    id INT AUTO_INCREMENT PRIMARY KEY,
    identifier VARCHAR(255) NOT NULL,
    new_player BOOLEAN NOT NULL,
    cooldown_end TIMESTAMP DEFAULT NULL
);
