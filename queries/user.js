const db = require("../db/dbConfig")

const getAllUsers = async () => {
    try {
        const allUsers = await db.any('SELECT * FROM "user"')
        return { allUsers };
    } catch (error) {
        return { error }
    }
};

// show (only one user)
const getUser = async (id) => {
    try {
        const result = await db.any('SELECT * FROM "user" WHERE id=$1', id)
        return { result }
    } catch (error) {
        return { error: error }
    }
};

// create user
const createUser = async (user) => {
    try {
        const newUser = await db.one(
            `INSERT INTO 
             "user" (name, weight_goal, calorie_goal)
            VALUES
             ($1, $2, $3)
            RETURNING *; `,
            [user.name, user.weight_goal, user.calorie_goal]
        );
        return { newUser }
    } catch (error) {
        return { error: error }
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser
}