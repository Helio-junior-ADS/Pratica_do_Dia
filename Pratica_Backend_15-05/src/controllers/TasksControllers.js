const TasksModels = require('../models/TasksModels');

const createdTasks = async (req,res) => {
  const createTasks = await TasksModels.createdTasks(req.body);
  return res.status(200).json(createTasks);
};

const getAll = async (req,res) => {  
  const show = await TasksModels.getAll();
  return res.status(200).json(show);
}

const showredTasks = async (req,res) => {
  const {id} = req.params;
  const showTasks = await TasksModels.showredTasks(id)
  return res.status(200).json(showTasks);
}

const updatedTasks = async (req,res) => {
  const {id} = req.params;
  await TasksModels.updatedTasks(id,req.body);
  const show = await TasksModels.getAll()
  return res.status(200).json(show);
}

const removedTasks = async (req,res) => {
  const {id} = req.params
  await TasksModels.removedTasks(id);
  const show = await TasksModels.getAll()
  return res.status(200).json(show);
}

module.exports = {
  createdTasks,
  getAll,
  showredTasks,
  updatedTasks,
  removedTasks
};