DROP DATABASE IF EXISTS meals_dev;
CREATE DATABASE meals_dev;

\c meals_dev;

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 current_weight INTEGER NOT NULL,
 weight_goal INTEGER NOT NULL,
 calorie_goal INTEGER NOT NULL
);

CREATE TABLE meals (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 image TEXT NOT NULL,
 serving_size NUMERIC NOT NULL,
 serving_size_unit TEXT,
 calories NUMERIC NOT NULL,
 total_fat NUMERIC NOT NULL,
 carbs NUMERIC NOT NULL,
 fiber NUMERIC NOT NULL,
 sugar NUMERIC NOT NULL,
 protein NUMERIC NOT NULL,
 user_id INTEGER NOT NULL REFERENCES users (id),
 meal_type TEXT NOT NULL
);