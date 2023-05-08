const Tarefas = require('./Tarefas');


const createdTasks = async (task) => {
  const {title,status} = task;
  const createTasks = await Tarefas.create({
    title:title,
    status:status
  })
  return {id:createTasks.id}
};

const getAll = async () => {
  const show = await Tarefas.findAll();
  return show;  
}

const shoredTasks = async (id) => {
  const showTasks = await Tarefas.findByPk(id)
  return showTasks;
}

const updatedTasks = async (id,task) => {
  const {title,status} = task;
  const updateTasks = await Tarefas.update({
    title:title,
    status:status
  },{
    where:{id:id}
  })
};

const removedTasks = async (id) => {
  const deleteTasks = await Tarefas.destroy({
    where:{id}
  });
  return deleteTasks;
}

module.exports = {
  createdTasks,
  getAll,
  shoredTasks,
  updatedTasks,
  removedTasks
};