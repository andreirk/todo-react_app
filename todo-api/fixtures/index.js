const mongoose = require('../libs/mongoose');
const Priority = require('../models/priority.model');
const User = require('../models/user.model');
const priorities = require('./priorities');
const users = require('./users');
const Todo = require('../models/todo.model');
const todos = require('./todos');

const itmesToGenerate = [
  {
    model: Priority,
    list: priorities,
  },
  {
    model: Todo,
    list: todos
  }
]

const generateUsers = async () => {
  await User.remove();

  for (let user of users) {
    const u = new User(user);
    await u.setPassword(user.password);
    await u.save();
  }

  console.log(`All done, ${users.length} users have been saved in DB`);
}

const generateItems = async (item) => {
  const Model = item.model;
  await Model.remove();
  const list = item.list;

  for (let item of list) {
    const el = new Model(item);
    await el.save();
  }
  console.log('modelName', Model.modelName)
  console.log(`All done, ${list.length} items of ${Model.modelName} have been saved in DB`);
}

async function processArray(array) {
  for (const item of array) {
    await generateItems(item);
  }
}

(async () => {
  await generateUsers();
  await processArray(itmesToGenerate);
  mongoose.disconnect();
  console.log('Done!');
})()



