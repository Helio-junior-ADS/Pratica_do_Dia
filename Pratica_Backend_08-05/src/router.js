const express = require('express');
const TasksControllers = require('./controllers/TasksControllers');
const TasksMidlleware = require('./middleware/TasksMiddleware');

const router = express.Router();

router.post('/tasks',TasksMidlleware.validateTitle,TasksMidlleware.validateStatus, TasksControllers.createdTasks);
router.get('/tasks', TasksControllers.getAll);
router.get('/tasks/:id', TasksControllers.showreTasks);
router.put('/tasks/:id',TasksMidlleware.validateTitle,TasksMidlleware.validateStatus, TasksControllers.updatedTasks);
router.delete('/tasks/:id', TasksControllers.removedTasks);

module.exports = router