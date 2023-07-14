const { Sequelize } = require('sequelize');
const sequelize = require('../config/db');


const db = { sequelize, Sequelize }

db.users = require('../model/UserModel')
db.tokens = require('../model/tokenstoreModel')


// db.sequelize.sync({ force: false });

module.exports = db;