var express = require('express')

var router = express.Router()

var ToDoController = require('../../controllers/todo-priorities.controller');

router.get('/', ToDoController.getPriorities)
router.post('/', ToDoController.createPriority)
router.put('/', ToDoController.updatePriority)
router.delete('/:id',ToDoController.removePriority)

module.exports = router;