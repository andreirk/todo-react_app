const JWTStrategy = require('passport-jwt').Strategy;
const config = require('config');
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const cash = require('../../redis');
const User = mongoose.model('User');


const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get('secret'),
};

module.exports = new JWTStrategy(opts, (jwt_payload, done) => {
  console.log(' --- JWT PAYLOAD IS:::', jwt_payload);
  cash.keys('*', function (err, replies) {
    // NOTE: code in this callback is NOT atomic
    // this only happens after the the .exec call finishes.
    console.log('reids KEYS ::: ', replies);
  })
  User.findById(jwt_payload.id)
    .then(user => {
      if(user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch(err => console.error(err));
})