module.exports = authRoutes = require('express').Router();
const { authController } = require('../controller/index')
const passport = require('passport');
const asyncWrapperFunction = require('../middleware/asyncwrapperFunction')


authRoutes.get('/login', asyncWrapperFunction(authController.loginUser));
authRoutes.get('/logout', passport.authenticate('jwt', { session: false }), asyncWrapperFunction(authController.logout));
