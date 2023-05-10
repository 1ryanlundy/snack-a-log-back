const express = require("express");
const user = express.Router();
const validateUser = require("../validations/validateUser");
const {
    getAllUsers,
    getUser,
    createUser
} = require("../queries/user");

// index user
user.get("/", async (req, res) => {
    const { error, allUsers } = await getAllUsers();
    if (error) {
        res.status(500).json({ error: error })
    } else {
        res.status(200).json({ allUsers });
    }
})


// show user
user.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await getUser(id);
    if (error?.code === 0) {
        res.status(404).json({ error: "User Not Found" });
    } else if (error) {
        res.status(500).json({ error: "Server Error" });
    } else {
        res.status(200).json(result);
    }
});


// create user
user.post("/", validateUser, async (req, res) => {
    const { error, newUser } = await createUser(req.body);
    if (error) {
        res.status(500).json({ error: "Server Error" });
    } else {
        res.status(201).json(newUser);
    }
})

module.exports = user;