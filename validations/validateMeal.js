const Joi = require("joi");
const createValidator = require("./create validator");

const mealSchema = Joi.object({
    name: Joi.string().required(),
    serving_size: Joi.number().required(),
    image: Joi.string().required(),
    calories: Joi.number().required(),
    protein: Joi.number().required(),
    fiber: Joi.number().required(),
    sugar: Joi.number().required(),
    carbs: Joi.number().required()
});

module.exports = createValidator(mealSchema);