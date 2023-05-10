const Joi = require("joi");
const createValidator = require("./create validator");

const userSchema = Joi.object({
    name: Joi.string().required(),
    weight_goal: Joi.number(),
    calorie_goal: Joi.number()
});

module.exports = createValidator(userSchema);
