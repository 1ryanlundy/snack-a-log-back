const express = require("express");
const meals = express.Router();
const validateMeal = require("../validations/validateMeal")
const {
    getAllMeals,
    getMeal,
    createMeal,
    updateMeal,
    deleteMeal
} = require("../queries/meals");

// index
meals.get("/", async (req, res) => {
    const { error, result } = await getAllMeals();
    if (error) {
        res.status(500).json({ error: "Server Error" });
    } else {
        res.status(200).json(result);
    }
});

// show
meals.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await getMeal(id);
    if (error?.code === 0) {
        res.status(404).json({ error: "Meal Not Found" });
    } else if (error) {
        res.status(500).json({ error: "Server Error" });
    } else {
        res.status(200).json(result);
    }
});

// create
meals.post("/", validateMeal, async (req, res) => {
    const { newMeal } = await createMeal(req.body);
    try {
        res.status(201).json(newMeal);
    } catch (error) {
        res.status(500).json({ error: error })
    }
});

// update
meals.put("/:id", validateMeal, async (req, res) => {
    const { id } = req.params;
    const { error, updatedMeal } = await updateMeal(id, req.body);
    if (error) {
        res.status(500).json({ error: error });
    } else {
        res.status(200).json(updatedMeal)
    }
});

// delete
meals.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await deleteMeal(id);

    res.status(200).json(result);

});

module.exports = meals;