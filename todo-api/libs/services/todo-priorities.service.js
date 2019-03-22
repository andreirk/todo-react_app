const Priority = require('../../models/priority.model')

_this = this

exports.getPriorities = async function (query, page, limit) {
  const options = {
    page,
    limit
  }
  try {
    const priorities = await Priority.paginate(query, options)
    return priorities;
  } catch (e) {
    throw Error('Error while Paginating Priority')
  }
}

exports.createPriority = async function (priority) {

  const newPriority = new Priority({
    title: priority.title,
    description: priority.description,
    date: new Date(),
    status: priority.status
  })

  try {
    const savedPriority = await newPriority.save()
    return savedPriority;
  } catch (e) {
    throw Error("Error while Creating Priority")
  }
}

exports.updatePriority = async function (priority) {
  const id = priority.id

  try {
    const oldPriority = await Priority.findById(id);
  } catch (e) {
    throw Error("Error occured while Finding the Priority")
  }

  if (!oldPriority) {
    return false;
  }

  console.log(oldPriority)

  oldPriority.title = priority.title
  oldPriority.description = priority.description
  oldPriority.status = priority.status


  console.log(oldPriority)

  try {
    const savedPriority = await oldPriority.save()
    return savedPriority;
  } catch (e) {
    throw Error("And Error occured while updating the Priority");
  }
}

exports.deletePriority = async function (id) {

  try {
    const deleted = await Priority.remove({_id: id})
    if (deleted.result.n === 0) {
      throw Error("Priority Could not be deleted")
    }
    return deleted
  } catch (e) {
    throw Error("Error Occured while Deleting the Priority")
  }
}