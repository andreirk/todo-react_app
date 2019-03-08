const PriorityService = require ('../services/todo-priorities.service')

_this = this

exports.getPriorities = async function (req, res, next) {

  const page = req.query.page ? req.query.page : 1
  const limit = req.query.limit ? req.query.limit : 10;

  console.log (page, limit)

  try {
    const priorities = await PriorityService.getPriorities ({}, page, limit)
    return res.status (200).json ({status: 200, data: priorities, message: "Succesfully Priorities Recieved"});
  } catch (e) {
    return res.status (400).json ({status: 400, message: e.message});
  }
}

exports.createPriority = async function (req, res, next) {
  const priority = {
    title: req.body.title,
  }

  try {
    const createdPriority = await PriorityService.createPriority (priority)
    return res.status (201).json ({status: 201, data: createdPriority, message: "Succesfully Created Priority"})
  } catch (e) {
    return res.status (400).json ({status: 400, message: "Priority Creation was Unsuccesfull"})
  }
}

exports.updatePriority = async function (req, res, next) {

  if (!req.body._id) {
    return res.status (400).json ({status: 400., message: "Id must be present"})
  }

  const id = req.body._id;

  console.log (req.body)

  const priority = {
    id,
    title: req.body.title ? req.body.title : null,
    description: req.body.description ? req.body.description : null,
    status: req.body.status ? req.body.status : null
  }

  try {
    const updatedPriority = await PriorityService.updatePriority (priority)
    return res.status (200).json ({status: 200, data: updatedPriority, message: "Succesfully Updated Tod"})
  } catch (e) {
    return res.status (400).json ({status: 400., message: e.message})
  }
}

exports.removePriority = async function (req, res, next) {

  const id = req.params.id;

  try {
    const deleted = await PriorityService.deletePriority (id)
    return res.status (204).json ({status: 204, message: "Succesfully Priority Deleted"})
  } catch (e) {
    return res.status (400).json ({status: 400, message: e.message})
  }

}