const UserService = require ('../services/users.service')

_this = this

exports.getUsers = async function (req, res, next) {
  console.log('hello')
  const page = req.query.page ? req.query.page : 1
  const limit = req.query.limit ? req.query.limit : 10;

  console.log (page, limit)

  try {
    const users = await UserService.getUsers ({}, page, limit)
    return res.status (200).json ({status: 200, data: users, message: "Succesfully Users Recieved"});
  } catch (e) {
    return res.status (400).json ({status: 400, message: e.message});
  }
}

exports.createUser = async function (req, res, next) {
  const user = {
    title: req.body.title,
    description: req.body.description,
    status: req.body.status
  }

  try {
    const createdUser = await UserService.createUser (user)
    return res.status (201).json ({status: 201, data: createdUser, message: "Succesfully Created ToDo"})
  } catch (e) {
    return res.status (400).json ({status: 400, message: "User Creation was Unsuccesfull"})
  }
}

exports.updateUser = async function (req, res, next) {

  if (!req.body._id) {
    return res.status (400).json ({status: 400., message: "Id must be present"})
  }

  const id = req.body._id;

  console.log (req.body)

  const user = {
    id,
    title: req.body.title ? req.body.title : null,
    description: req.body.description ? req.body.description : null,
    status: req.body.status ? req.body.status : null
  }

  try {
    const updatedUser = await UserService.updateUser() (user)
    return res.status (200).json ({status: 200, data: updatedUser, message: "Succesfully Updated Tod"})
  } catch (e) {
    return res.status (400).json ({status: 400., message: e.message})
  }
}

exports.removeUser = async function (req, res, next) {

  const id = req.params.id;

  try {
    const deleted = await UserService.deleteUser (id)
    return res.status (204).json ({status: 204, message: "Succesfully User Deleted"})
  } catch (e) {
    return res.status (400).json ({status: 400, message: e.message})
  }

}