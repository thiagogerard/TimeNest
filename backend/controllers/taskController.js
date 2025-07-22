const Task = require('../models/Task');
const User = require('../models/User');

exports.createTask = async (req, res) => {
  const { title, category, weight, dueDate } = req.body;

  try {
    const task = await Task.create({
      title,
      category,
      weight,
      dueDate,
      userId: req.user.id
    });

    res.status(201).json(task);
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    // Busca a task existente
    const task = await Task.findOne({ _id: id, userId: req.user.id });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Guarda o status antigo para verificar conclusão
    const wasPending = task.status !== 'completed';

    // Aplica as alterações
    if (updates.title)    task.title    = updates.title;
    if (updates.category) task.category = updates.category;
    if (updates.weight)   task.weight   = updates.weight;
    if (updates.dueDate)  task.dueDate  = updates.dueDate;
    if (updates.status)   task.status   = updates.status;

    // (Opcional) marca data de conclusão
    if (updates.status === 'completed' && wasPending) {
      task.completedAt = new Date();
    }

    // Salva o documento e dispara updatedAt
    await task.save();

    // Se concluiu agora, atualiza energia e retorna junto
    if (updates.status === 'completed' && wasPending) {
      const user = await User.findById(req.user.id);
      user.dailyEnergy = Math.max(0, user.dailyEnergy - task.weight);
      await user.save();

      return res.json({
        task,
        dailyEnergy: user.dailyEnergy,
      });
    }

    // Caso não seja conclusão, retorna só a task atualizada
    res.json({ task });
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOneAndDelete({ _id: id, userId: req.user.id });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  }
};
