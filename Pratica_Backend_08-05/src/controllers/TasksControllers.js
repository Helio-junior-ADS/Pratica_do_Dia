const TasksModel = require('../model/TasksModel');

const createdTasks = async (req,res) => {
  const createTasks = await TasksModel.createdTasks(req.body);
  return res.status(200).json(createTasks);
};

const getAll = async (req,res) => {
  const show = await TasksModel.getAll();
  res.status(200).json(show);
};

const showreTasks = async (req,res) => {
  const {id} = req.params;
  const showTasks = await TasksModel.showreTasks(id);
  return res.status(200).json(showTasks);
}

const updatedTasks = async (req,res) => {
  const {id} = req.params;
  await TasksModel.updatedTasks(id,req.body);
  const show = await TasksModel.getAll();
  return res.status(200).json(show);
}

const removedTasks = async (req,res) => {
  const {id} = req.params;
  await TasksModel.removedTasks(id);
  const show = await TasksModel.getAll();
  return res.status(200).json(show);

}

module.exports = {
  createdTasks,
  getAll,
  showreTasks,
  updatedTasks,
  removedTasks
}