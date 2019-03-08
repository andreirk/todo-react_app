const passport = require('passport');
const User = require('../../models/user.model');

const localStrategy = require('./strategies/local');
const jwtStrategy = require('./strategies/jwt');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, done);
});

passport.use(localStrategy);
passport.use(jwtStrategy);

module.exports = passport;