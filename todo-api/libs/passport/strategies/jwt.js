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
  const jwtId = jwt_payload.id;
  // check if this token exists in the blacklist
  cash.get(`${config.get('jwt.blacklistName')}:${jwtId}`, function (err, exists) {
    console.log('____ist there such MEMBER 1 ::: ', exists);
    if(exists){
      return done(null, false);
    } else {

      User.findById(jwtId)
        .then(user => {
          if(user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.error(err));

    }
  });


})