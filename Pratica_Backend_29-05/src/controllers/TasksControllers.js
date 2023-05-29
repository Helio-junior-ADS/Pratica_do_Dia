const TasksModels = require('../models/TasksModels');

const createdTask = async (req,res) => {
  const createTask = await TasksModels.createdTask(req.body)
  return res.status(200).json(createTask) 
}

const getAll = async (req,res) => {
  const show = await TasksModels.getAll();
  return res.status(200).json(show)
}

const showredTasks = async (req,res) => {
  const {id} = req.params
  const showTasks = await TasksModels.showredTasks(id)
  return res.status(200).json(showTasks);
};

const updatedTasks = async (req,res) => {
 const {id} = req.params;
 await TasksModels.updatedTasks(id,req.body);
 const show = await TasksModels.showredTasks(id);
 return res.status(200).json(show);
}

const removedTasks = async (req,res) => {
  const {id} = req.params;
  await TasksModels.removedTasks(id);
  const show = await TasksModels.getAll();
  return res.status(200).json(show);
}

module.exports = {
  createdTask,
  getAll,
  showredTasks,
  updatedTasks,
  removedTasks
};