const express = require('express');
const tasksControllers = require('./controllers/tasksControllers');
const tasksMiddleware = require('./middleware/tasksMiddleware');

const router = express.Router();

router.post('/tasks',tasksMiddleware.validateTitle,tasksMiddleware.validateStatus,tasksControllers.createdTasks );
router.get('/tasks',tasksControllers.getAll );
router.get('/tasks/:id',tasksControllers.showredTasks);
router.put('/tasks/:id',tasksControllers.updatedTasks);
router.delete('/tasks/:id',tasksControllers.removedtasks);

module.exports = router