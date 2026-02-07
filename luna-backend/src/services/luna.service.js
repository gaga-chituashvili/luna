const { TodoSchema } = require('../models/luna-schema');
const { z } = require('zod');

const todoCreationSchema = z.object({
  title: z.string(),
  description: z.string(),
  complated: z.boolean().default(false),
  priority: z.enum(['low', 'medium', 'high']),
  dueDate: z.string().nullable(true),
});

async function createTaskService(req, res) {
  const newTask = req.body;


  const validateBody = todoCreationSchema.safeParse(newTask);

  if (!validateBody.success) {
    return res
      .status(400)
      .json({ success: false, message: JSON.parse(validateBody.error) });
  }

  const newTodo = await TodoSchema.create(newTask);

  if (!newTodo) {
    return res.status(500).json({
      success: false,
      message: 'Failed to create a new task',
    });
  }

  return res.status(201).json({
    success: true,
    message: 'Task has been created successfully!',
    data: newTodo,
  });
}

async function getAll(req, res) {
  const allTodo = await TodoSchema.findAll({
    attributes: { exclude: ['updatedAt'] },
  });

  if (!allTodo || allTodo.length === 0) {
    return res.status(404).json({
      success: false,
      message: 'No tasks found',
    });
  }

  return res.json({
    success: true,
    data: allTodo,
  });
}

function getOne(req, res) {
  return res.json({
    success: true,
    message: 'Successfully returned todo',
    data: req.task,
  });
}

async function updateTask(req, res) {
  const taskToUpdate = req.body;

  const todoUpdateSchema = z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      complated: z.boolean().default(false).optional(),
      priority: z.enum(['low', 'medium', 'high']).optional(),
      dueDate: z.string().optional(),
    })
    .strict();

  const validateBody = todoUpdateSchema.safeParse(taskToUpdate);

  if (!validateBody.success) {
    return res
      .status(400)
      .json({ success: false, message: JSON.parse(validateBody.error) });
  }

  const updateTask = await TodoSchema.update(taskToUpdate, {
    where: { id: req.task.id },
  });

  if (!updateTask) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update task',
    });
  }

  return res.json({
    success: true,
    message: 'Task has been updated successfully!',
  });
}

async function deleteTask(req, res) {
  const deleteTask = await TodoSchema.destroy({ where: { id: req.task.id } });

  if (!deleteTask) {
    return res.status(500).json({
      success: false,
      message: 'Failed to delete task',
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Task Completed successfully',
  });
}

module.exports = {
  createTaskService,
  getAll,
  getOne,
  updateTask,
  deleteTask,
  todoCreationSchema,
};