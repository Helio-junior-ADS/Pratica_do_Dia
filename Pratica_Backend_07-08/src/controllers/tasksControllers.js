const tasksModels = require('../models/tasksModels');

const createdTask = async (req,res) => {
  const createTask = await tasksModels.createdTask(req.body);
  return res.status(200).json(createTask);
}

const getAll = async (req,res) => {
  const show = await tasksModels.getAll();
  return res.status(200).json(show);
}

const showdTask = async (req,res) => {
  const {id} = req.params;
  const show = await tasksModels.showdTask(id);
  return res.status(200).json(show);
}

const updatedTasks = async (req,res) => {
  const {id} = req.params;
  await tasksModels.updatedTasks(id,req.body)
  const show = await tasksModels.showdTask(id)
  return res.status(200).json({"msg":"Atualizado com SUCESSO"});
}

const removeTask = async (req,res) => {
  const {id} = req.params;
  await tasksModels.removeTask(id);
  const show = await tasksModels.getAll();
  return res.status(200).json(show);
}

module.exports = {
  createdTask,
  getAll,
  showdTask,
  updatedTasks,
  removeTask
};