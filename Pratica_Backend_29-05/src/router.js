const express = require('express');
const TasksControllers = require('./controllers/TasksControllers');
const tasksMiddleware = require('./middleware/tasksMiddleware');

const router = express.Router();

router.post('/tasks', tasksMiddleware.validateTitle,tasksMiddleware.validateStatus,TasksControllers.createdTask);
router.get('/tasks/:id', TasksControllers.showredTasks);
router.get('/tasks', TasksControllers.getAll);
router.put('/tasks/:id', tasksMiddleware.validateTitle,tasksMiddleware.validateStatus,TasksControllers.updatedTasks);
router.delete('/tasks/:id', TasksControllers.removedTasks);

module.exports = router