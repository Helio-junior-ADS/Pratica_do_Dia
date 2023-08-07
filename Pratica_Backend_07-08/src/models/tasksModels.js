const Tarefas = require("./Tarefas");

const createdTask = async (task) => {
  const { title, status } = task;
  const createTask = await Tarefas.create({
    title: title,
    status: status,
  });
  return { id: createTask.id };
};

const getAll = async () => {
  const show = await Tarefas.findAll();
  return show;
};

const showdTask = async (id) => {
  const show = await Tarefas.findByPk(id);
  return show;
};

const updatedTasks = async (id, task) => {
  const { title, status } = task;
  const updateTasks = await Tarefas.update(
    {
      title: title,
      status: status,
    },
    {
      where: { id: id },
    }
  );

  return updateTasks;
};

const removeTask = async (id) => {
  const deleteTask = await Tarefas.destroy({ 
    where: { id: id } 
  });
  return deleteTask;
};

module.exports = {
  createdTask,
  getAll,
  showdTask,
  updatedTasks,
  removeTask
};
