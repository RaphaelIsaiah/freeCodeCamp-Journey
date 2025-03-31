CREATE DATABASE bikes;
\c bikes
CREATE TABLE bikes();
\d
ALTER TABLE bikes ADD COLUMN bike_id SERIAL PRIMARY KEY;
\d bikes
ALTER TABLE bikes ADD COLUMN type VARCHAR(50) NOT NULL;
\d bikes
ALTER TABLE bikes ADD COLUMN size INT NOT NULL;
ALTER TABLE bikes ADD COLUMN available BOOLEAN NOT NULL DEFAULT(TRUE);
\d bikes
CREATE TABLE customers();
ALTER TABLE customers ADD COLUMN customer_id SERIAL PRIMARY KEY;
\d customers
ALTER TABLE customers ADD COLUMN phone VARCHAR(15) NOT NULL UNIQUE;
ALTER TABLE customers ADD COLUMN name VARCHAR(40) NOT NULL;
\d customers
CREATE TABLE rentals();
ALTER TABLE rentals ADD COLUMN rental_id SERIAL PRIMARY KEY;
\d rentals
ALTER TABLE rentals ADD COLUMN customer_id INT NOT NULL;
ALTER TABLE rentals ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);
\d rentals
ALTER TABLE rentals ADD COLUMN bike_id INT NOT NULL;
ALTER TABLE rentals ADD FOREIGN KEY(bike_id) REFERENCES bikes(bike_id);
\d rentals
ALTER TABLE rentals ADD COLUMN date_rented DATE NOT NULL DEFAULT(Now());
\d rentals
ALTER TABLE rentals ADD COLUMN date_returned DATE;
\d
INSERT INTO bikes(type, size) VALUES('Mountain', 27);
SELECT * FROM bikes;
INSERT INTO bikes(type, size) VALUES('Mountain', 28);
INSERT INTO bikes(type, size) VALUES('Mountain', 29);
INSERT INTO bikes(type, size) VALUES('Road', 27);
SELECT * FROM bikes;
INSERT INTO bikes(type, size) VALUES('Road', 28),('Road', 29);
INSERT INTO bikes(type, size) VALUES('BMX', 19),('BMX', 20),('BMX', 21);
SELECT * FROM bikes;
-- split the terminal at this point
touch bike-shop.sh
chmod +x bike-shop.sh
./bike-shop.sh
./bike-shop.sh
UPDATE bikes SET available = false;
UPDATE bikes SET available = true WHERE type != 'BMX';
./bike-shop.sh
[[ a =~ [0-9] ]]; echo $?
[[ a1 =~ [0-9] ]]; echo $?
[[ a1 =~ ^[0-9]$ ]]; echo $?
[[ 1 =~ ^[0-9]$ ]]; echo $?
[[ 11 =~ ^[0-9]$ ]]; echo $?
[[ 11 =~ ^[0-9]+$ ]]; echo $?
[[ ! 11 =~ ^[0-9]+$ ]]; echo $?
UPDATE bikes SET available = true;
