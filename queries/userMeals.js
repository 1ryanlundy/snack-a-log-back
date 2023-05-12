const db = require("../db/dbConfig")

const getUserMeals = async (userId) => {
    try {
        const userMeals = await db.any('SELECT * FROM MEALS WHERE id IN (SELECT meal_id FROM user_meals WHERE user_id = $1);', userId);
        return { userMeals }
    } catch (error) {
        return { error }
    }
};

module.exports = {
    getUserMeals
}