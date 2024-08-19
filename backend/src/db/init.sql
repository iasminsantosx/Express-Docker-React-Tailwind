CREATE DATABASE officecom;

CREATE TABLE IF NOT EXISTS bussinessentity (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS phonenumbertype (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS personphone (
    bussinessentity_id INT,
    phonenumber VARCHAR(50),
    phonenumbertype_id INT,
    PRIMARY KEY (bussinessentity_id, phonenumber, phonenumbertype_id),
    FOREIGN KEY (bussinessentity_id) REFERENCES bussinessentity(id),
    FOREIGN KEY (phonenumbertype_id) REFERENCES phonenumbertype(id)
);