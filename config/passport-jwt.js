const passport = require('passport')
const db = require('../model/index')
const UserModel = db.users
const TokenModel = db.tokens
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
        const id = jwt_payload.id
        const checkloginUser = await TokenModel.findOne({ where: { UserId: id } })
        if (!checkloginUser) {
            return done(null, false);
        } else {
            const user = await UserModel.findOne({ where: { id } });
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        }
    } catch (err) {
        return done(err, false);
    }
}));