/*
	Only for ESX with "weight" for items
	For QBCore check documentation
*/

INSERT IGNORE `items` (`name`, `label`, `weight`, `rare`, `can_remove`) VALUES
	('fixkit', 'Reparaturset', 1, 0, 1),
	('medikit', 'Medikit', 1, 0, 1),
	('sponge', 'Schwamm', 1, 0, 1),
	('handcuffs', 'Handschellen', 1, 0, 1),
	('lockpick', 'Lockpick', 1, 0, 1),
	('bandage', 'Verband', 1, 0, 1);