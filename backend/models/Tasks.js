const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [20, 'name can not be more than 20 characters'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  })



const TasksSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'must provide username']
    },
    tasks: {
    type: [TaskSchema],
    trim: true,
  },
    completed: {
    type: Boolean,
    default: false,
  },
    date:{
    type:String,
    required:true
  }
})

module.exports = mongoose.model('Tasks', TasksSchema)
