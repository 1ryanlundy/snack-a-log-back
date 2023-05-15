const db = require("../db/dbConfig")

const getUserMeals = async (userId) => {
    try {
        const userMealsData = await db.any(
            `SELECT meals.*, users.*
              FROM meals
              JOIN users ON meals.user_id = users.id
              WHERE meals.user_id = $1
              AND users.id = $1;`,
            userId);
        return { userMealsData }
    } catch (error) {
        return { error }
    }
};

module.exports = {
    getUserMeals
}