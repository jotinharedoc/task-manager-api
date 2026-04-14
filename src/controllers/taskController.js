const Task = require('../models/Task');

const createTask = async (req, res) => {
  try {
    console.log('BODY CREATE:', req.body);

    const { title, description, date, priority } = req.body;

    if (!title) {
      return res.status(400).json({
        message: 'O título da tarefa é obrigatório'
      });
    }

    const task = await Task.create({
      title,
      description,
      date,
      priority,
      user: req.userId
    });

    return res.status(201).json({
      message: 'Tarefa criada com sucesso',
      task
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao criar tarefa',
      error: error.message
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId }).sort({ createdAt: -1 });

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao buscar tarefas',
      error: error.message
    });
  }
};

const updateTask = async (req, res) => {
  try {
    console.log('PARAMS:', req.params);
    console.log('BODY UPDATE:', req.body);

    const { id } = req.params;
    const { title, description, completed, date, priority } = req.body;

    const task = await Task.findOne({ _id: id, user: req.userId });

    if (!task) {
      return res.status(404).json({
        message: 'Tarefa não encontrada'
      });
    }

    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.completed = completed ?? task.completed;
    task.date = date ?? task.date;
    task.priority = priority ?? task.priority;

    await task.save();

    return res.status(200).json({
      message: 'Tarefa atualizada com sucesso',
      task
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao atualizar tarefa',
      error: error.message
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndDelete({
      _id: id,
      user: req.userId
    });

    if (!task) {
      return res.status(404).json({
        message: 'Tarefa não encontrada'
      });
    }

    return res.status(200).json({
      message: 'Tarefa deletada com sucesso'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao deletar tarefa',
      error: error.message
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask
};