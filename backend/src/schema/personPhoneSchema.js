const joi = require("joi");

const PersonPhoneSchema = joi.object({
    bussinessentity_id: joi.number().required().messages({
        "any.required": "bussinessentity_id é obrigatório.",
    }),
    phonenumbertype_id: joi.number().required().messages({
        "any.required": "phonenumbertype_id é obrigatório.",
    }),
    phonenumber: joi.string().min(8).required().messages({
    "string.empty": "phonenumber é obrigatório.",
    "any.required": "phonenumber é obrigatório.",
  })
});

module.exports = PersonPhoneSchema;