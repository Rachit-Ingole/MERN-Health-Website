const Task = require('../models/Task')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')


const getAllTasks = async (req, res) => {
  const tasks = await Task.find({ createdBy: req.user.userId }).sort('createdAt')
  res.status(200).json({ tasks,count:tasks.length })
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

  const task = await Task.findByIdAndRemove({ _id: taskId,createdBy:userId })
  if (!task) {
    return NotFoundError(`No task with id : ${taskId}`)
  }
  res.status(StatusCodes.OK).send()
}

const updateTask = async (req, res, next) => {
  const {
    body: { taskDescription, completed },
    user: { userId },
    params: { id: taskId },
  } = req
  if (taskDescription === '') {
    throw new BadRequestError('Task field cannot be empty')
  }
  const task = await Task.findByIdAndUpdate({ _id: taskId,createdBy:userId }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    return new NotFoundError(`No job with id ${taskId}`)
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
