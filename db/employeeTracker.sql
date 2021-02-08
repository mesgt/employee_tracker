DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
id INT(10) NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE roleTb (
id INT(10) NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2),
department_id INT(10) NOT NULL,  -- foreign id--
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT(10) NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT(10) NOT NULL,  -- foreign id--
manager_id INT(10),
PRIMARY KEY (id)
);

SELECT * FROM department;

SELECT * FROM roleTb;

SELECT * FROM employee;

INSERT into department (id, name) VALUES (3, 'Sales');
INSERT into department (id, name) VALUES (4, 'Administration');
INSERT into department (id, name) VALUES (5, 'Engineering');
INSERT into department (id, name) VALUES (6, 'Marketing');

INSERT into roleTb (id, title, salary, department_id) VALUES (1, 'Senior Manager', '55000.00', '1');
INSERT into roleTb (id, title, salary, department_id) VALUES (2, 'Senior Manager', '56000.00', '2');
INSERT into roleTb (id, title, salary, department_id) VALUES (3, 'Senior Manager', '57000.00', '3');
INSERT into roleTb (id, title, salary, department_id) VALUES (4, 'Senior Manager', '58000.00', '4');
INSERT into roleTb (id, title, salary, department_id) VALUES (5, 'Staff Accountant', '45000.00', '1');
INSERT into roleTb (id, title, salary, department_id) VALUES (6, 'Project Accountant', '50000.00', '1');
INSERT into roleTb (id, title, salary, department_id) VALUES (7, 'Technical Manager', '52000.00', '5');
INSERT into roleTb (id, title, salary, department_id) VALUES (8, 'HR Specialist', '35000.00', '2');
INSERT into roleTb (id, title, salary, department_id) VALUES (9, 'Administrative Coordinator', '65000.00', '2');
INSERT into roleTb (id, title, salary, department_id) VALUES (10, 'CPA', '75000.00', '1');
INSERT into roleTb (id, title, salary, department_id) VALUES (11, 'Sales Associate', '35000.00', '3');
INSERT into roleTb (id, title, salary, department_id) VALUES (12, 'Senior Director', '105000.00', '3');
INSERT into roleTb (id, title, salary, department_id) VALUES (13, 'Marketing Associate', '35000.00', '6');
INSERT into roleTb (id, title, salary, department_id) VALUES (14, 'Marketing Director', '105000.00', '6');
INSERT into roleTb (id, title, salary, department_id) VALUES (15, 'Sales Director', '105000.00', '3');


INSERT into employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'Simon', 'Smith', '6', '7');
INSERT into employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Sarah', 'Marshall', '5', '10');
INSERT into employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Joey', 'Johnson', '6', '10');
INSERT into employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Katie', 'Matthews', '1', '10');
INSERT into employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'Mary', 'Crane', '8', '12');
INSERT into employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'John', 'Grant', '9', '2');


