const tasksModels = require('../models/tasksModels');

const createdTasks = async (req,res) => {
  const createTasks = await tasksModels.createdTasks(req.body);

  return res.status(200).json(createTasks);
};

const getAll = async (req,res) => {  
  const show = await tasksModels.getAll();

  return res.status(200).json(show);
}

const shoredAll = async (req,res) => {
  const {id} = req.params;

  const show = await tasksModels.shoredAll(id);

  return res.status(200).json(show);
}

const updatedTask = async (req,res) => {
  const {id} = req.params;

  await tasksModels.updatedTask(id,req.body);
  const show = await tasksModels.shoredAll(id)

  return res.status(200).json(show)
};

const removedTask = async (req,res) => {
  const {id} = req.params;
  
  await tasksModels.removedTask(id);
  const show = await tasksModels.getAll();

  return res.status(200).json(show);
}

module.exports = {
  createdTasks,
  getAll,
  shoredAll,
  updatedTask,
  removedTask
};