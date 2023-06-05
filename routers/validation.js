const Joi = require('@hapi/joi');

const registerValidation = function(data) {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        phone_number: Joi.number().required()
    });
    
    return new Promise((resolve, reject) => {
        const { error, value } = schema.validate(data);
        if (error) {
            reject(error);
        } else {
            resolve(value);
        }
    });
};

const loginValidation = function(data) {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    return new Promise((resolve, reject) => {
        const { error, value } = schema.validate(data);
        if (error) {
            reject(error);
        } else {
            resolve(value);
        }
    });
};

module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
