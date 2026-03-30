const { TodoSchema } = require('../models/todo-schema');

async function resolveTaskId(req, res, next) {
  const taskId = parseInt(req.params.taskId, 10);

  if (isNaN(taskId)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid todo ID',
    });
  }

  const task = await TodoSchema.findOne({ where: { id: taskId } });

  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Task not found',
    });
  }

  req.task = task; 

  next();
}

module.exports = { resolveTaskId };