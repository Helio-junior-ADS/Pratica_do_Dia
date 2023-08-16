const tasksModels = require('../models/tasksModels');

const createdTasks = async (req,res) => {
  const createTasks = await tasksModels.createdTasks(req.body);
  return res.status(200).json(createTasks);
};

const showredTasks = async (req,res) => {
  const show = await tasksModels.showredTasks();
  return res.status(200).json(show);
}

const getAll = async (req,res) => {
  const {id} = req.params;
  const show = await tasksModels.getAll(id);
  return res.status(200).json(show);
};

const updatedTasks = async (req,res) => {
  const {id} = req.params;
  await tasksModels.updatedTasks(id,req.body);
  const show = await tasksModels.getAll(id);
  return res.status(200).json(show);
}

const remodevTasks = async (req,res) => {
  const {id} = req.params;
  await tasksModels.remodevTasks(id);
  const show = await tasksModels.showredTasks();
  return res.status(200).json(show);
}

module.exports = {
  createdTasks,
  showredTasks,
  getAll,
  updatedTasks,
  remodevTasks
};