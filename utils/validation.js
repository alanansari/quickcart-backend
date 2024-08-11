const Joi = require("joi");

module.exports = {
    loginSchema : Joi.object({
        email: Joi.string().required().trim(),
        password: Joi.string().required()
    }),
    emailSchema : Joi.object({
        email: Joi.string().required().trim().email()
    }),
    signupSchema : Joi.object({
        name: Joi.string().required().min(2).max(50),
        email: Joi.string().required().trim().email(),
        password: Joi.string().required().min(6),
        otp: Joi.string().required().length(6)
    }),
    addAddressSchema: Joi.object({
        house: Joi.string().required().trim(),
        area: Joi.string().required().trim(),
        state: Joi.string().required().trim(),
        pincode: Joi.number().required().min(100000).max(999999)
    }),
}
