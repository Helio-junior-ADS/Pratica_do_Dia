const { Sequelize } = require('sequelize');
const Tarefas = require('./Tarefas');

const createdTask = async (task) => {
  const {title,status} = task;
  const createTask = await Tarefas.create({
    title:title,
    status:status
  });
  return {id:createTask.id};
}

const getAll = async () => {
  const show = await Tarefas.findAll();
  return show;
}

const showredTasks = async (id) => {
  const showTasks = await Tarefas.findByPk(id);
  return showTasks;
}

const updatedTasks = async (id,task) => {
  const {title,status} = task;
  const updateTasks = await Tarefas.update({
    title:title,
    status:status
  },{
    where:{id:id}
  });
  return updateTasks;
}

const removedTasks = async (id) => {
  const deleteTasks = await Tarefas.destroy({where:{id}})
  return deleteTasks;
}

module.exports = {
  createdTask,
  getAll,
  showredTasks,
  updatedTasks,
  removedTasks
};