const Task = require('../models/Task');

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
    res.status(500).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
    try {
      const tasks = await Task.find({ userId: req.user.id }).sort({ createdAt: -1 });
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
  
    try {
      const task = await Task.findOneAndUpdate(
        { _id: id, userId: req.user.id },
        req.body,
        { new: true }
      );
  
      if (!task) return res.status(404).json({ message: 'Task not found' });
  
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    } 
};
  

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
  
    try {
      const task = await Task.findOneAndDelete({ _id: id, userId: req.user.id });
  
      if (!task) return res.status(404).json({ message: 'Task not found' });
  
      res.json({ message: 'Task deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  