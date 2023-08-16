const express = require('express');
const tasksControllers = require('./controllers/tasksControllers');
const tasksMiddleware = require('./middleware/tasksMiddleware');

const router = express.Router();

router.post('/tasks', tasksMiddleware.validateStatus,tasksMiddleware.validateTitle,tasksControllers.createdTasks );
router.get('/tasks',tasksControllers.showredTasks );
router.get('/tasks/:id',tasksControllers.getAll );
router.put('/tasks/:id', tasksMiddleware.validateStatus,tasksMiddleware.validateTitle,tasksControllers.updatedTasks );
router.delete('/tasks/:id', tasksControllers.remodevTasks );


module.exports = router;