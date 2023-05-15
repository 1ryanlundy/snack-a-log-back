const express = require("express");
const userMeals = express.Router({ mergeParams: true });
const { getUserMeals } = require("../queries/userMeals");

// show
userMeals.get("/", async (req, res) => {
    const { userId } = req.params;
    const { error, userMealsData } = await getUserMeals(userId);
    if (error) {
        res.status(500).json({ error: error });
    } else {
        res.status(200).json(userMealsData);
    }
});

module.exports = userMeals;