module.exports = userRoutes = require('express').Router();
const passport = require('passport');
const { UserController } = require('../controller/index')
const asyncWrapperFunction = require('../middleware/asyncwrapperFunction')

userRoutes.post('/', asyncWrapperFunction(UserController.createUser));
userRoutes.get('/home', passport.authenticate('jwt', { session: false }), asyncWrapperFunction(UserController.home));
userRoutes.get('/:id', passport.authenticate('jwt', { session: false }), asyncWrapperFunction(UserController.deleteUser));
userRoutes.put('/:id', passport.authenticate('jwt', { session: false }), asyncWrapperFunction(UserController.updateProfileUser));
