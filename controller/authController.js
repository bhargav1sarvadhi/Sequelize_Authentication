const db = require('../model/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const CustomError = require('../utils/CustomError')
const userModel = db.users
const tokenModel = db.tokens


const loginUser = async (req, res, next) => {
    const { body: { email, password } } = req;
    const login = await userModel.findOne({ where: { email } })
    if (login && bcrypt.compareSync(password, login.password)) {
        const payload = { id: login.id }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRES })
        if (!token) {
            return next(new CustomError(`not found Token `, 404));
        } else {
            const checkToken = await tokenModel.findOne({ where: { UserId: login.id } })
            if (!checkToken) {
                const tokenstore = await tokenModel.create({ token: token, UserId: login.id })
                if (!tokenstore) {
                    return next(new CustomError(`Somthing Went Wrong `, 500));
                }
                res.status(200).json({ success: true, message: 'successfully login user', token: token })
            } else {
                const Token = await tokenModel.update({ token }, { where: { UserId: login.id } })
                res.status(200).json({ success: true, message: 'successfully login user', token: token })
            }
        }
    } else {
        return next(new CustomError(`Please Check Enter Valid Details `, 404));
    }
}

const logout = async (req, res, next) => {
    const UserId = req.user.id
    const logout = await tokenModel.destroy({ where: { UserId } })
    res.status(200).json({ success: true, message: 'successfully logout user' })
}


module.exports = { loginUser, logout }