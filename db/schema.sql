DROP DATABASE IF EXISTS burgerDB;
CREATE DATABASE burgerDB;

USE burgerDB;

CREATE TABLE burgers (
	id INT NOT NULL auto_increment,
    burger_name VARCHAR(75) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);