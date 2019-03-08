const favicon = require('serve-favicon');


exports.init = app => app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));