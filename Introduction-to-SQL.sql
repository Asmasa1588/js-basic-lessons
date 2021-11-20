CREATE USER 'asma' @'localhost'IDENTIFIED BY '1234';
SELECT user, host FROM mysql.user;

SHOW DATABASES;
CREATE DATABASE pets;
USE pets;
SHOW TABLES;

-- Creating table in sql
CREATE TABLE Pets(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL, -- not null means required
    age INT, 
    color VARCHAR(30)
    
);

SELECT *
FROM Pets;

DROP TABLE Pets;

INSERT INTO Pets (name)
VALUES ('Gypsy');
