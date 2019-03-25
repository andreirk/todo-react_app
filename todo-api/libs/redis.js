const redis = require('redis');
const config = require('config');
const bluebird = require('bluebird');


bluebird.promisifyAll(redis);
const client = redis.createClient();

// const mongoDbUri = config.get('mongodb.uri');

// client.HMSET('key2', {
//   "0123456789": "abcdefghij", // NOTE: key and value will be coerced to strings
//   "some manner of key": "a type of value"
// });

module.exports = client;