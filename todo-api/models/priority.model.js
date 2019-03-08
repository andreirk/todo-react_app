const mongoose = require('../libs/mongoose')
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate')


const PrioritySchema = new Schema({
    title: String,
    order: Number,
})

PrioritySchema.plugin(mongoosePaginate)
const Priority = mongoose.model('Priority', PrioritySchema)


module.exports = Priority;