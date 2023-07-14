const db = require('../model/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const CustomError = require('../utils/CustomError')
const userModel = db.users


const createUser = async (req, res, next) => {
    const { body: { username, email, password } } = req;
    const user = await userModel.create({ username, email, password })
    if (user) {
        return res.status(201).json({ success: true, message: 'successfully created user', data: user });
    }
}


const home = async (req, res, next) => {
    res.send(`Welcome to ${req.user.username}`)
}

const deleteUser = async (req, res, next) => {
    const { params: { id } } = req;
    const user = await userModel.destroy({ where: { id } })
    if (!user) {
        return next(new CustomError(`Please Check ${id}  `, 404));
    } else {
        res.status(200).json({ success: true, message: 'successfully deleted user' })
    }
}

const updateProfileUser = async (req, res, next) => {
    const { body: { username, email, password }, params: { id } } = req;
    const user = await userModel.update({ username, email, password }, { where: { id } })
    if (user == 0) {
        return next(new CustomError(`Please Check ${id} `, 404));
    } else {
        res.status(200).json({ success: true, message: 'successfully updated user profile', updatedProfile: user })
    }
}




module.exports = { createUser, deleteUser, updateProfileUser, home }