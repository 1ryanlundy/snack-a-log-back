const db = require("../db/dbConfig");

// all
const getAllMeals = async () => {
    try {
        const result = await db.any("SELECT * FROM meals");
        console.log('This is working')
        return { result };
    } catch (error) {
        console.log('This isnt working')
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
            meals(name, image, calories, protein, fiber, sugar, carbs)
            VALUES
             ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *; `,
            [meal.name, meal.image, meal.calories, meal.protein, meal.fiber, meal.sugar, meal.carbs]
        );
        return newMeal;
    } catch (error) {
        return { error: error }
    }
}

// update
const updateMeal = async (id, meal) => {
    try {
        const updatedMeal = await db.one(
            `UPDATE meals SET name=$1, image=$2, calories=$3, protein=$4, fiber=$5, sugar=$6, carbs=$7 WHERE id=$8 RETURNING *`,
            [meal.name, meal.image, meal.calories, meal.protein, meal.fiber, meal.sugar, meal.carbs, id]
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
        console.log('deletedMeal', deletedMeal)
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