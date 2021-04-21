-- Query to setup database

CREATE DATABASE shorturl;

\c shorturl

CREATE TABLE urls (
     url_id serial PRIMARY KEY,
     full_url VARCHAR ( 255 ) NOT NULL,
     short_url VARCHAR ( 50 ) NOT NULL,
     created_at TIMESTAMP NOT NULL,
     exp_at TIMESTAMP 
);