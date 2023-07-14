module.exports = routes = require('express').Router();
const CustomError = require('../utils/CustomError')
const invalidRoute = (req, res, next) => {
    return next(new CustomError(`${req.url} - url not Found`, 404));
};

routes.use('/user', require('./UserRoutes'))
routes.use('/auth', require('./authRoutes'))
routes.use('*', invalidRoute)