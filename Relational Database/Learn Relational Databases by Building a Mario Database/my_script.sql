-- Creating the characters table (Only run this if the table doesn't exist)
-- CREATE TABLE characters();
-- Adding columns for the character tables
-- ALTER TABLE characters
-- ADD COLUMN character_id SERIAL;
-- ADD COLUMN name VARCHAR(30) NOT NULL;
-- ADD COLUMN homeland VARCHAR(60);
-- ADD COLUMN favorite_color VARCHAR(30);
-- Add Rows to the second_table
-- INSERT INTO second_table(id, username) VALUES(1, 'Samus');
-- INSERT INTO characters(name, homeland, favorite_color) VALUES('Mario', 'Mushroom Kingdom', 'Red');
-- INSERT INTO characters(name, homeland, favorite_color) VALUES('Luigi', 'Mushroom Kingdom', 'Green');
-- INSERT INTO characters(name, homeland, favorite_color) VALUES('Luigi', 'Mushroom Kingdom', 'Green');
-- UPDATE characters
-- SET favorite_color = 'Pink'
-- WHERE name = 'Luigi'
--     AND homeland = 'Mushroom Kingdom';
-- UPDATE characters
-- SET name = 'Peach'
-- WHERE favorite_color = 'Pink';
-- DELETE FROM characters
-- WHERE name = 'Peach';
-- INSERT INTO characters(name, homeland, favorite_color)
-- VALUES('Luigi', 'Mushroom Kingdom', 'Green');
-- INSERT INTO characters(name, homeland, favorite_color)
-- VALUES('Luigi', 'Mushroom Kingdom', 'Green');
-- INSERT INTO characters(name, homeland, favorite_color)
-- VALUES('Toadstool', 'Mushroom Kingdom', 'Red'),
--     ('Bowser', 'Mushroom Kingdom', 'Green');
-- INSERT INTO characters(name, homeland, favorite_color) VALUES('Daisy', 'Sarasaland', 'Yellow'), ('Yoshi', 'Dinosaur land', 'Green');
-- UPDATE characters
-- SET homeland = 'Dinosaur Land'
-- WHERE name = 'Yoshi'
-- UPDATE characters
-- SET favorite_color = 'Orange'
-- WHERE name = 'Daisy';
-- UPDATE characters
-- SET name = 'Toad'
-- WHERE favorite_color = 'Red';
-- UPDATE characters
-- SET name = 'Mario'
-- WHERE character_id = 1;
-- UPDATE characters
-- SET favorite_color = 'Blue'
-- WHERE character_id = 6;
-- UPDATE characters
-- SET favorite_color = 'Yellow'
-- WHERE name = 'Bowser';
-- UPDATE characters
-- SET homeland = 'Koopa Kingdom'
-- WHERE name = 'Bowser';
-- Order columns by character id
-- SELECT *
-- FROM characters
-- ORDER BY character_id;
-- Adding Primary Key [Constraints]
-- ALTER TABLE characters
-- ADD PRIMARY KEY(name);
-- How to drop a constraint
-- ALTER TABLE characters DROP CONSTRAINT characters_pkey;
-- Set primary key again
-- ALTER TABLE characters
-- ADD PRIMARY KEY(character_id);
-- Create another table for more info on the characters.
-- CREATE TABLE more_info();
-- ALTER TABLE more_info ADD COLUMN more_info_id SERIAL;
-- ALTER TABLE more_info ADD PRIMARY KEY(more_info_id);
-- ALTER TABLE more_info ADD COLUMN birthday date;
-- ALTER TABLE more_info ADD COLUMN height INT;
-- Note: This data type is for decimals. NUMERIC(4, 1) has up to four digits and one of them has to be to the right of the decimal.
-- ALTER TABLE more_info ADD COLUMN weight NUMERIC(4, 1);
-- ALTER TABLE more_info
-- ADD COLUMN character_id INT REFERENCES characters(character_id);
-- ALTER TABLE more_info
-- ADD UNIQUE(character_id);
-- ALTER TABLE more_info
-- DROP CONSTRAINT more_info_character_id_key1;
-- ALTER TABLE more_info ALTER COLUMN character_id SET NOT NULL;
-- SELECT character_id FROM characters;
-- SELECT character_id, name FROM characters;
-- Create rows
-- INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1981-07-09', '155', '64.5', 1);
-- INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1983-07-14', '175', '48.8', 4);
-- INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1985-10-18', '173', '52.2', 5);
-- SELECT character_id, name FROM characters WHERE name = 'Toad';
-- INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1950-01-10', '66', '35.6', 6);
-- SELECT character_id, name FROM characters WHERE name = 'Bowser';
-- INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1990-10-29', '258', '300', 7);
-- SELECT character_id, name FROM characters WHERE name = 'Daisy';
-- INSERT INTO more_info(birthday, height, character_id) VALUES('1989-07-31', NULL, 8);
-- SELECT character_id, name FROM characters WHERE name = 'Yoshi';
-- INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1990-04-13', '162', '59.1', 9);
-- ALTER TABLE more_info RENAME COLUMN height TO height_in_cm;
-- ALTER TABLE more_info RENAME COLUMN weight TO weight_in_kg;
-- Creating a full table
-- CREATE TABLE sounds(sound_id SERIAL PRIMARY KEY);
-- ALTER TABLE sounds ADD COLUMN filename VARCHAR(40) NOT NULL UNIQUE;
-- ALTER TABLE sounds ADD COLUMN character_id INT NOT NULL REFERENCES characters(character_id);
-- SELECT * FROM characters ORDER BY character_id;
-- INSERT INTO sounds(filename, character_id) VALUES('its-a-me.wav', 1);
-- INSERT INTO sounds(filename, character_id) VALUES('yippee.wav', 1);
-- INSERT INTO sounds(filename, character_id) VALUES('ha-ha.wav', 4);
-- INSERT INTO sounds(filename, character_id) VALUES('oh-yeah.wav', 4);
-- INSERT INTO sounds(filename, character_id) VALUES('yay.wav', 5), ('woo-hoo.wav', 5);
-- INSERT INTO sounds(filename, character_id) VALUES('mm-hmm.wav', 5), ('yahoo.wav', 1);
CREATE TABLE actions(action_id SERIAL PRIMARY KEY);