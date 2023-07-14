const CustomError = require('../utils/CustomError');
const { StatusCodes } = require('http-status-codes');

const errorHandler = (error, req, res, next) => {
    const status_code = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    const errorName = error.name;

    if (errorName === "SequelizeValidationError") {
        return res.status(StatusCodes.FORBIDDEN).json({ status_code: StatusCodes.FORBIDDEN, success: false, message: message })
    }
    if (errorName === "SequelizeUniqueConstraintError") {
        return res.status(StatusCodes.CONFLICT).json({ status_code: StatusCodes.CONFLICT, success: false, message: message });
    }
    return res.status(status_code).json({ status_code: status_code, success: false, message: message });
};

module.exports = errorHandler;