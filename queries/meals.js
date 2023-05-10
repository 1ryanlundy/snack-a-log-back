const db = require("../db/dbConfig");

// all
const getAllMeals = async () => {
    try {
        const result = await db.any("SELECT * FROM meals");
        return { result };
    } catch (error) {
        return { error };
    }
};

// one
const getMeal = async (id) => {
    try {
        const result = await db.any("SELECT * FROM meals WHERE id=$1", id);
        return { result };
    } catch (error) {
        return { error: error };
    }
};

// create
const createMeal = async (meal) => {
    try {
        const newMeal = await db.one(
            `INSERT INTO
            meals(name, serving_size, image, calories, protein, fiber, sugar, carbs)
            VALUES
             ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *; `,
            [meal.name, meal.serving_size, meal.image, meal.calories, meal.protein, meal.fiber, meal.sugar, meal.carbs]
        );
        return { newMeal };
    } catch (error) {
        return { error: error }
    }
}

// update
const updateMeal = async (id, meal) => {
    try {
        const updatedMeal = await db.one(
            `UPDATE meals SET name=$1, serving_size=$2, image=$3, calories=$4, protein=$5, fiber=$6, sugar=$7, carbs=$8 WHERE id=$9 RETURNING *`,
            [meal.name, meal.serving_size, meal.image, meal.calories, meal.protein, meal.fiber, meal.sugar, meal.carbs, id]
        );
        return { updatedMeal };
    } catch (error) {
        return { error: error }
    }
}

// delete
const deleteMeal = async (id) => {
    try {
        const deletedMeal = await db.one('DELETE FROM meals WHERE id=$1 RETURNING *', id);
        return { deletedMeal };
    } catch (error) {
        return { error: error }
    }
}

module.exports = {
    getAllMeals,
    getMeal,
    createMeal,
    updateMeal,
    deleteMeal
};