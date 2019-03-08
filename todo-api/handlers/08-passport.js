const passport = require('passport');

exports.init = app => {
  app.use(passport.initialize());
  // app.use(passport.session()); // ctx.state.user = user
};