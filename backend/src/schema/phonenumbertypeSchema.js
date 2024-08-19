const joi = require("joi");

const phonenumbertypeSchema = joi.object({
    name: joi.string().min(2).required().messages({
    "string.empty": "name é obrigatório.",
    "any.required": "name é obrigatório.",
  })
});

module.exports = phonenumbertypeSchema;