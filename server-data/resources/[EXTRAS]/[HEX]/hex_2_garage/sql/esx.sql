CREATE TABLE IF NOT EXISTS `owned_vehicles` (
  `owner` varchar(40) NOT NULL,
  `plate` varchar(12) NOT NULL,
  `vehicle` longtext DEFAULT NULL,
  `type` varchar(20) NOT NULL DEFAULT 'car',
  `job` varchar(20) NOT NULL DEFAULT 'civ',
  `stored` tinyint(1) NOT NULL DEFAULT 0,
  `nickname` varchar(120) NOT NULL DEFAULT 'Fahrzeug',
  `fav` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`plate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `owned_vehicles` ADD IF NOT EXISTS `type` VARCHAR(20) NULL DEFAULT 'car';
ALTER TABLE `owned_vehicles` ADD IF NOT EXISTS `job` VARCHAR(20) NULL DEFAULT 'civ';
ALTER TABLE `owned_vehicles` ADD IF NOT EXISTS `stored` TINYINT(1) NULL DEFAULT 0;
ALTER TABLE `owned_vehicles` ADD IF NOT EXISTS `nickname` VARCHAR(50) NULL DEFAULT 'NULL';
ALTER TABLE `owned_vehicles` ADD IF NOT EXISTS `fav` TINYINT(1) NULL DEFAULT 0;

UPDATE `owned_vehicles` SET `job` = 'civ' WHERE `job` = NULL;
UPDATE `owned_vehicles` SET `job` = 'civ' WHERE `job` = '';

ALTER TABLE `owned_vehicles` ALTER `job` SET DEFAULT 'civ';
ALTER TABLE `owned_vehicles` ALTER `nickname` SET DEFAULT 'Fahrzeug';
ALTER TABLE `owned_vehicles` ALTER `type` SET DEFAULT 'car';

UPDATE `owned_vehicles` SET `nickname` = 'Fahrzeug' WHERE `nickname` = NULL;