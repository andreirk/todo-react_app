const mongoose = require('../libs/mongoose')
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate')

const ToDoSchema = new Schema({
    title: String,
    description: String,
    date: Date,
    priority: {
        type: Schema.Types.ObjectId,
        ref: 'Priority',
    },
    remindTime: Date,
    status: String
})

ToDoSchema.plugin(mongoosePaginate)
const ToDo = mongoose.model('Todo', ToDoSchema)

module.exports = ToDo;