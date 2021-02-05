DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
id INT(10) NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT(10) NOT NULL,
title VARCHAR(30),
salary DECIMAL(2),
department_id INT(10),
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT(10) NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT(10),
manager_id INT(10),
PRIMARY KEY (id)
);

