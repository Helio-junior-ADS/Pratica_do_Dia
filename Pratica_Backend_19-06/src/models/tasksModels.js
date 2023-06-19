const Tarefas = require('./Tarefas');

const createdTasks = async (task) => {
  const { title,status } = task;
  const createTasks = await Tarefas.create({
    title:title,
    status:status
  });  
  return {id:createTasks.id}
};

const getAll = async () => {
  const show = await Tarefas.findAll()
  return show;
}

const shoredAll = async (id) => {
  const show = await Tarefas.findByPk(id);
  return show;
}

const updatedTask = async (id,task) => {
  const { title,status } = task;
  const updateTask = await Tarefas.update({
    title:title,
    status:status
  },{
    where:{id:id}
  }) 
  return updateTask
};

const removedTask = async (id) => {
  const deleteTask = await Tarefas.destroy({where:{id:id}})
  return deleteTask;
}

module.exports = {
  createdTasks,
  getAll,
  shoredAll,
  updatedTask,
  removedTask
}