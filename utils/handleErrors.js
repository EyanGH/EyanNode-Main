const chalk = require("chalk");

const createError = (validator, error) => {
    error.message = `${validator} Error: ${error.message}`;
    error.status = error.status || 400;
    throw new Error(error)
}

const handleError = (res, status, message = '') => {
    try {
        console.log(chalk.redBright(message));
        return res.status(status).send(message);

    } catch (e) {
        return res;
    }
}

module.exports = { createError, handleError }