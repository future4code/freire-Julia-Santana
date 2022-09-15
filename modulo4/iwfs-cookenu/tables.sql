CREATE TABLE  User (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL, 
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Recipe (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    ingredientes VARCHAR(64) NOT NULL,
    description  VARCHAR(64) NOT NULL, 
    userId  VARCHAR(255) NOT NULL
);
