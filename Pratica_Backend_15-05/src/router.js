const express = require('express');
const TasksControllers = require('./controllers/TasksControllers');
const TaksMiddleware = require('./middleware/TasksMiddleware')

const router = express.Router();

router.post('/tasks',TaksMiddleware.validateTitle,TaksMiddleware.validateStatus,TasksControllers.createdTasks );
router.get('/tasks',TasksControllers.getAll );
router.get('/tasks/:id',TasksControllers.showredTasks );
router.put('/tasks/:id',TaksMiddleware.validateTitle,TaksMiddleware.validateStatus,TasksControllers.updatedTasks );
router.delete('/tasks/:id',TasksControllers.removedTasks );

module.exports = router;