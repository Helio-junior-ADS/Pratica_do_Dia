const tasksModels = require('../models/tasksModels');

const createdTasks = async (req,res) => {
  const createTasks = await tasksModels.createdTasks(req.body);
  return res.status(200).json(createTasks);
};

const getAll = async (req,res) => {
  const tasks = await tasksModels.getAll();
  return res.status(200).json(tasks);
};

const showredTasks = async (req,res) => {
  const {id} = req.params
  const showTasks = await tasksModels.showredTasks(id);
  return res.status(200).json(showTasks);
}

const updatedTasks = async (req,res) => {
  const {id} = req.params;
  await tasksModels.updatedTasks(id,req.body);
  const show = await tasksModels.getAll()
  return res.status(200).json(show);
};

const removedtasks = async (req,res) => {
  const {id} = req.params;
  await tasksModels.removedtasks(id);
  const show = await tasksModels.getAll()
  return res.status(200).json(show);
}

module.exports = {
  createdTasks,
  getAll,
  showredTasks,
  updatedTasks,
  removedtasks
};

