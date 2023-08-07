const express = require("express");
const tasksControllers = require('./controllers/tasksControllers');
const tasksMiddleware = require('./middleware/tasksMiddleware');

const router = express.Router();

router.post("/tasks", tasksMiddleware.ValidateTitle,tasksMiddleware.ValidateStatus,tasksControllers.createdTask);
router.get("/tasks", tasksControllers.getAll);
router.get("/tasks/:id", tasksControllers.showdTask);
router.put("/tasks/:id", tasksMiddleware.ValidateTitle,tasksMiddleware.ValidateStatus,tasksControllers.updatedTasks);
router.delete("/tasks/:id",tasksControllers.removeTask);

module.exports = router;