const express = require('express');

// const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const index = require('./routes/index.route');
const api = require('./routes/api.route');
const passport = require('./libs/passport');
const login = require('./routes/login.route');
const logout = require('./routes/logout.route');
const register = require('./routes/register.route');

const app = express();
require('./handlers/03-headers').init(app);


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// require('./handlers/01-favicon').init(app);

require('./handlers/04-logger').init(app);
require('./handlers/06-bodyParser').init(app);

// app.use(cookieParser());
require('./handlers/02-static').init(app);

require('./handlers/08-passport').init(app);

app.use('/', index);
app.use('/login', login);
app.use('/logout', logout);
app.use('/register', register);
app.use('/api', passport.authenticate('jwt', { session: false }), api);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
