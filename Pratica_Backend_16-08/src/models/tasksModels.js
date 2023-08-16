const Tarefas = require('./Tarefas');

const createdTasks = async (task) => {
  const {title,status} = task;
  const createTasks = await Tarefas.create({
    title:title,
    status:status
  });
  return {id:createTasks.id};
};

const showredTasks = async () => {
  const show = await Tarefas.findAll();
  return show;
}

const getAll = async (id)=> {
  const show = await Tarefas.findByPk(id);
  return show;
}

const updatedTasks = async (id,task) => {
  const {title,status} = task;
  const updateTasks = await Tarefas.update({
    title:title,
    status:status
  },{
    where:{id:id}
  })
  return updateTasks;
}

const remodevTasks = async (id) => {
  const deleteTask = await Tarefas.destroy({
    where:{id:id}
  });

  return deleteTask;

}

module.exports = {
  createdTasks,
  showredTasks,
  getAll,
  updatedTasks,
  remodevTasks
};