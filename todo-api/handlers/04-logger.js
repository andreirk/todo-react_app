
// request/response logger
const logger = require('morgan');

exports.init = app => app.use(logger('dev'));