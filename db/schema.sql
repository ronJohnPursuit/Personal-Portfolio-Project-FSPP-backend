
DROP DATABASE IF EXISTS leaf_services;
CREATE DATABASE leaf_services; 

\c leaf_services; 

DROP TABLE IF EXISTS services;

-- CREATE TABLE snacks (
-- id SERIAL PRIMARY KEY,
-- name TEXT NOT NULL,
-- fiber INT DEFAULT 0 ,
-- protein INT DEFAULT 0, 
-- added_sugar INT DEFAULT 0,
-- is_healthy BOOLEAN, 
-- image TEXT DEFAULT'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
-- );

CREATE TABLE services (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
descript TEXT NOT NULL,
starting_rate INT  ,
add_service TEXT NULL, 
add_serviceprice INT , 
add_service2 TEXT NULL, 
add_service2price INT ,
date_service DATE,
image TEXT DEFAULT'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
);

