const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const TokenModel = sequelize.define('tokens', {
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    }
})

module.exports = TokenModel