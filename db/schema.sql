DROP DATABASE IF EXISTS meals_dev;
CREATE DATABASE meals_dev;

\c meals_dev;

CREATE TABLE meals (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 serving_size NUMERIC NOT NULL,
 image TEXT NOT NULL,
 calories NUMERIC NOT NULL,
 protein NUMERIC NOT NULL,
 fiber NUMERIC NOT NULL,
 sugar NUMERIC NOT NULL,
 carbs NUMERIC NOT NULL,
 total_fat NUMERIC NOT NULL
);

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 weight_goal INTEGER,
 calorie_goal INTEGER REFERENCES calorie_goal (id) ON DELETE CASCADE
);

CREATE TABLE calorie_goal (
    id SERIAL PRIMARY KEY,
    goal NUMBER NOT NULL,
    user_goal INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE
); 