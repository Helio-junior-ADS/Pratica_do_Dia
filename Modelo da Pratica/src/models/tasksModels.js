const Tarefas = require('./Tarefas');

const createdTasks = async (task) => {
  const {title, status} = task;
  const createTasks = await Tarefas.create({
    title:title,
    status:status
  });
  return {id:createTasks.id};
}

const getAll = async () => {
  const tasks = await Tarefas.findAll();
  return tasks;
};

const showredTasks = async (id) => {
  const showTasks = await Tarefas.findByPk(id);  
  return showTasks;
};

const updatedTasks = async (id,task) => {
  const {title,status} = task;   
  const updateTasks = await Tarefas.update({
    title:title,
    status:status
  },{
    where:{id:id}
  })

  return updateTasks

};

const removedtasks = async (id) => {
 const deleteTasks = await Tarefas.destroy({
  where:{id}
 });
 return deleteTasks;
}



module.exports = {
  createdTasks,
  getAll,
  showredTasks,
  updatedTasks,
  removedtasks
}