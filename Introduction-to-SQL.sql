CREATE USER 'asma' @'localhost'IDENTIFIED BY '1234';
SELECT user, host FROM mysql.user;

SHOW DATABASES;
CREATE DATABASE pets;
USE pets;
SHOW TABLES;

-- Creating table in sql

CREATE TABLE Vaccinations (
	id INT AUTO_INCREMENT PRIMARY KEY,
    vaccinationName VARCHAR(120) NOT NULL, 
    targetAge INT UNSIGNED,
    targetAnimalType VARCHAR(60)
    );

CREATE TABLE Pets(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL, -- not null means required
    age INT UNSIGNED,
    color VARCHAR(30),
    vaccinationId INT NOT NULL,
    FOREIGN KEY (vaccinationId) REFERENCES Vaccinations(id)
);

SELECT *
FROM Vaccinations;

SELECT *
FROM Pets;

DROP TABLE Pets;
DROP TABLE Vaccinations;

INSERT INTO Vaccinations (vaccinationName,targetAge, targetAnimalType)
VALUES ('PlanetVaccine1',1,'CAT');

INSERT INTO Vaccinations (vaccinationName,targetAge, targetAnimalType)
VALUES ('PlanetVaccine2',1,'DOG');




INSERT INTO Pets (name, age, color,vaccinationId)
VALUES ('Jupiter',1,'brown',2);

INSERT INTO Pets (name, age, color,vaccinationId)
VALUES ('Gypsy',8,'grey',1);


INSERT INTO Pets (name, age, color,vaccinationId)
VALUES ('Golden',5,'grey',1);

SELECT * 
FROM Pets
INNER JOIN Vaccinations
ON Pets.vaccinationId = Vaccinations.id
WHERE targetAnimalType = 'CAT';