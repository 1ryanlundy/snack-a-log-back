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
            meals(name, image, serving_size, serving_size_unit, calories, protein, fiber, sugar, carbs, total_fat, user_id, meal_type)
            VALUES
             ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
            RETURNING * `,
            [meal.name, meal.image, meal.serving_size, meal.serving_size_unit, meal.calories, meal.protein, meal.fiber, meal.sugar, meal.carbs, meal.total_fat, meal.user_id, meal.meal_type]
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
            `UPDATE meals SET name=$1, serving_size=$2, serving_size_unit=$3, image=$4, calories=$5, protein=$6, fiber=$7, sugar=$8, carbs=$9, total_fat=$10, user_id=$11, meal_type=$12 WHERE id=$13 RETURNING *`,
            [meal.name, meal.serving_size, meal.serving_size_unit, meal.image, meal.calories, meal.protein, meal.fiber, meal.sugar, meal.carbs, meal.total_fat, meal.user_id, meal.meal_type, id]
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