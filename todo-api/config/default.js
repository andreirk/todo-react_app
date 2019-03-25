const path = require('path');
const defer = require('config/defer').deferConfig;

module.exports =  {
  secret: process.env.SECRET || 'my$uperStrong$ecret!!!',
  root: process.cwd(),
  server: {
    host: 'http://localhost',
    port: 3000,
  },
  templatesRoot: path.join(process.cwd(), 'templates'),
  mongodb: {
    debug: false,
    uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todoapp'
  },
  crypto: {
    hash: {
      length: 14,
      iterations: 10
    }
  },
  mailer: {
    gmail: {
      user: 'falkonirk',
      password: 'i81505081i'
    },
    senders:  {
      // transactional emails, register/forgot pass etc
      default:  {
        fromEmail: 'course.test.mailer@gmail.com',
        fromName:  'JavaScript.ru',
        signature: "<em>С уважением,<br>Javascript.ru</em>"
      },
    }
  },
  jwt: {
    expiration_time: 3600,
  }
};