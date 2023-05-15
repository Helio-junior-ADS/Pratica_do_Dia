const Tarefas = require('./Tarefas');

const createdTasks = async (task) => {
  const {title,status} = task;
  const createTasks = await Tarefas.create({
    title:title,
    status:status
  });
  return {id:createTasks.id};
};

const getAll = async ()=> {
  const show = await Tarefas.findAll()
  return show;
}

const showredTasks = async (id)=> {
  const showTasks = await Tarefas.findByPk(id)
  return showTasks;
}

const updatedTasks = async (id,task) => {
  const {title,status} = task;
  const updateTask = await Tarefas.update({
    title:title,
    status:status
  },{
    where:{id:id}
  })

  return updateTask
}

const removedTasks = async (id) => {
  const deleteTask = await Tarefas.destroy({
    where:{id:id}
  })
  return deleteTask;
}

module.exports = {
  createdTasks,
  getAll,
  showredTasks,
  updatedTasks,
  removedTasks
}