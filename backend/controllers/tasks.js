const Task = require('../models/Task')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const User = require('../models/User')


const getAllTasks = async (req, res) => {

  const tasks = await Task.find({ createdBy: req.user.userId }).sort('createdAt')
  const categorizedData = {};

  tasks.forEach(doc => {
    try {
      let createdAtDate = new Date(doc.createdAt);
      createdAtDate = `${createdAtDate.getDate()}/${createdAtDate.getMonth() + 1}/${createdAtDate.getFullYear()}`;
      if (!categorizedData[createdAtDate]) {
        categorizedData[createdAtDate] = [];
      }
      categorizedData[createdAtDate].push(doc);
    } catch (error) {
      console.error("Error parsing date:", error);
    }
  });

  res.status(200).json(categorizedData)
}

const getTask = async (req, res) => {
  const {
    user: { userId },
    params: { id: taskId },
  } = req

  const task = await Task.findOne({ _id: taskId,createdBy:userId })
  if (!task) {
    return NotFoundError(`No task with id : ${taskId}`)
  }

  res.status(StatusCodes.OK).json({ task })
}

const createTask = async (req, res) => {
  req.body.createdBy = req.user.userId
  const task = await Task.create(req.body)
  res.status(StatusCodes.CREATED).json({ task })
}


const deleteTask = async (req, res, next) => {
  const {
    user: { userId },
    params: { id: taskId },
  } = req

  const task = await Task.findByIdAndDelete({ _id: taskId,createdBy:userId })
  if (!task) {
    return NotFoundError(`No task with id : ${taskId}`)
  }
  res.status(StatusCodes.OK).send()
}

const updateTask = async (req, res, next) => {
  const {
    user: { userId },
    params: { id: taskId },
  } = req
  const task = await Task.findByIdAndUpdate({ _id: taskId,createdBy:userId }, {completed:true}, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    return new NotFoundError(`No job with id ${taskId}`)
  }

  const user = await User.findById({_id:userId})
  let todaysDate = new Date();
  let day = todaysDate.getDate();
  let month = todaysDate.getMonth() + 1;
  let year = todaysDate.getFullYear();
  todaysDate = `${day}/${month}/${year}`

  if(user.actions < 5 || user.lastActionDate != todaysDate){
    if(user.lastActionDate != todaysDate){
      await User.findByIdAndUpdate({ _id: userId},{actions:1,$inc:{balance:100},lastActionDate:todaysDate}, {
        new: true,
        runValidators: true,
      })
    }else{
      await User.findByIdAndUpdate({ _id: userId},{$inc:{actions:1,balance:100},lastActionDate:todaysDate}, {
        new: true,
        runValidators: true,
      })
    }
  }





  res.status(StatusCodes.OK).json({ task })
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
