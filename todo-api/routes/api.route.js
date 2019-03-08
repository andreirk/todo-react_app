const express = require('express')
const router = express.Router()
const todos = require('./api/todos.route')
const priorities = require('./api/todo-priorities.route')
const users = require('./api/users.route')

router.use('/todos', todos);
router.use('/priorities', priorities);
router.use('/users', users);

module.exports = router;