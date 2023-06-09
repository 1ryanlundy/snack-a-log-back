const db = require("../db/dbConfig")

const getAllUsers = async () => {
    try {
        const allUsers = await db.any('SELECT * FROM users')
        return { allUsers };
    } catch (error) {
        return { error }
    }
};

// show (only one user)
const getUser = async (id) => {
    try {
        const result = await db.any('SELECT * FROM users WHERE id=$1', id)
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
             users (name, current_weight, weight_goal, calorie_goal)
            VALUES
             ($1, $2, $3, $4)
            RETURNING *; `,
            [user.name, user.current_weight, user.weight_goal, user.calorie_goal]
        );
        return { newUser }
    } catch (error) {
        return { error: error }
    }
};

// update user
const updateUser = async (id, user) => {
    try {
        const updatedUser = await db.one(
            `UPDATE users SET name=$1, current_weight=$2, weight_goal=$3, calorie_goal=$4 WHERE id=$5 RETURNING *`,
            [user.name, user.current_weight, user.weight_goal, user.calorie_goal, id]
        );
        return { updatedUser };
    } catch (error) {
        return { error: error }
    }
}

// delete user
const deleteUser = async (id) => {
    try {
        const deletedUser = await db.one('DELETE FROM users WHERE id=$1 RETURNING *', id);
        return { deletedUser }
    } catch (error) {
        return { error: error };
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}