const db = require("../db/dbConfig")

const getUserMeals = async (userId) => {
    try {
        const userMealsData = await db.any(
            `SELECT * FROM meals WHERE user_id = $1;`,
            userId);
        return { userMealsData }
    } catch (error) {
        return { error }
    }
};

module.exports = {
    getUserMeals
}