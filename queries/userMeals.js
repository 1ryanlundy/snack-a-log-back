const db = require("../db/dbConfig")

const getUserMeals = async (userId) => {
    try {
        const userMeals = await db.any('SELECT * FROM meals WHERE user_id = $1;', userId);
        return { userMeals }
    } catch (error) {
        return { error }
    }
};

module.exports = {
    getUserMeals
}