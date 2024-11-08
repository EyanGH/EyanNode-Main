const cardValidation = require("./Joi/cardValidation");
const config = require('config');

const validator = config.get('VALIDATOR');

const validateCard = (user) => {
    if (validator === "Joi") {
        const { error } = cardValidation(user);
        if (error) return error.details[0].message;
        return "";
    }
};

exports.validateCard = validateCard;