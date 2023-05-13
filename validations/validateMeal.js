const Joi = require("joi");
const createValidator = require("./create validator");

const mealSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    serving_size: Joi.number().required(),
    serving_size_unit: Joi.string().optional(),
    calories: Joi.number().required(),
    total_fat: Joi.number().required(),
    carbs: Joi.number().required(),
    fiber: Joi.number().required(),
    sugar: Joi.number().required(),
    protein: Joi.number().required(),
    user_id: Joi.number().required(),
    meal_type: Joi.string().required()
});

module.exports = createValidator(mealSchema);