const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT_SERVER || 3000
const errorHandler = require('./middleware/errorHandler');
const db = require('./config/db')
const helmet = require('helmet')
const passport = require('passport');
require('./config/passport-jwt')
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(passport.initialize());
app.use('/', require('./routes/index'));
app.listen(port, () => { console.log('server listing on port : ' + port) })
app.use(errorHandler);