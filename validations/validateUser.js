const Joi = require("joi");
const createValidator = require("./create validator");

const userSchema = Joi.object({
    name: Joi.string().required(),
    current_weight: Joi.number().required(),
    weight_goal: Joi.number().required(),
    calorie_goal: Joi.number().required()
});

module.exports = createValidator(userSchema);
