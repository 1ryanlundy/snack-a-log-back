// dependencies
const express = require("express");
const cors = require("cors");
const mealsControllers = require("./controllers/mealsControllers");


// config
const app = express();

// middleware
app.use(cors())
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Welcome to the Snack-a-Log App")
});

app.use("/meals", mealsControllers);

// app.use("/user", userController);

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found");
});

module.exports = app;