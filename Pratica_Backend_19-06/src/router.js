const express = require('express');
const tasksControllers = require('./controllers/tasksControllers');
const tasksMiddleware = require('./middleware/tasksMiddleware');

const router = express.Router();

router.post('/tasks',tasksMiddleware.validateTitle,tasksMiddleware.validateStatus, tasksControllers.createdTasks);
router.get('/tasks', tasksControllers.getAll);
router.get('/tasks/:id', tasksControllers.shoredAll);
router.put('/tasks/:id', tasksMiddleware.validateTitle,tasksMiddleware.validateStatus,tasksControllers.updatedTask);
router.delete('/tasks/:id', tasksControllers.removedTask);


module.exports = router;