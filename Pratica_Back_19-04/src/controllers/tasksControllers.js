const tasksModels = require('../models/tasksModels');

const createdTasks = async (req,res) => {  
  const createTasks = await tasksModels.createdTasks(req.body)
  return res.status(200).json(createTasks);
}

const getAll = async (req,res) => {
  const show = await tasksModels.getAll();
  return res.status(200).json(show);
}

const shoredTasks = async (req,res) => {
  const {id} = req.params
  const showTasks = await tasksModels.shoredTasks(id);
  return res.status(200).json(showTasks);
}

const updatedTasks = async (req,res) => {
  const {id} = req.params;
  await tasksModels.updatedTasks(id,req.body);
  const show = await tasksModels.getAll()
  return res.status(200).json(show)
};

const removedTasks = async (req,res) => {
 const {id} = req.params;
 await tasksModels.removedTasks(id);
 const show = await tasksModels.getAll();
 return res.status(200).json(show);
}

module.exports = {
  createdTasks,
  getAll,
  shoredTasks,
  updatedTasks,
  removedTasks
};