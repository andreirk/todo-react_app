const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const config = require('config');
const bluebird = require('bluebird');

mongoose.set('debug', config.get('mongodb.debug'));
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useEstimatedDocumentCount', true);
mongoose.plugin(beautifyUnique);
mongoose.Promise = bluebird;

const mongoDbUri = config.get('mongodb.uri');

mongoose.connect(mongoDbUri)
  .then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : ${mongoDbUri}`)})
  .catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : ${mongoDbUri}`)});

module.exports = mongoose;