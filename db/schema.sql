DROP DATABASE IF EXISTS meals_dev;
CREATE DATABASE meals_dev;

\c meals_dev;

CREATE TABLE meals (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 image TEXT NOT NULL,
 calories NUMERIC NOT NULL,
 protein NUMERIC NOT NULL,
 fiber NUMERIC NOT NULL,
 sugar NUMERIC NOT NULL,
 carbs NUMERIC NOT NULL
);

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 weight_goal INTEGER,
 calorie_goal INTEGER
);