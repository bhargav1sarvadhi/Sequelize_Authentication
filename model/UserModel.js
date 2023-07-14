const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')
const CustomError = require('../utils/CustomError')
const bcrypt = require('bcrypt')

const UserSchema = sequelize.define('users', {

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'username already in Exists'
        },
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'email already in Exists'
        },
        validate: {
            notEmpty: true,
            isEmail: {
                msg: 'Please enter a valid email address'
            },
            len: {
                args: [6, 128],
                msg: 'Email address must be between 6 and 128 characters in length'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [6, 100]
        },
        set(value) {
            if (value.length >= 6) {
                this.setDataValue('password', bcrypt.hashSync(value, 12))
            } else {
                throw new CustomError('please provide password minimum length is 6 characters')
            }
        }
    }
})

module.exports = UserSchema;