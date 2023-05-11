DROP DATABASE IF EXISTS meals_dev;
CREATE DATABASE meals_dev;

\c meals_dev;

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
 protein NUMERIC NOT NULL
);

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 weight_goal INTEGER NOT NULL,
 calorie_goal INTEGER NOT NULL
);

CREATE TABLE user_meals (
 user_id INTEGER REFERENCES users (id),
 meal_id INTEGER REFERENCES meals (id),
 PRIMARY KEY (user_id, meal_id)
);     
