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
    const updates = req.body;
  
    try {
      const oldTask = await task.findOne({_id: id, userId: req.user.id});
      if (!oldTask) return res.status(404).json({ message: 'Task not found' })

      const task = await Task.findOneAndUpdate(
        { _id: id, userId: req.user.id },
        req.body,
        { new: true }
      );

      if (updates.status === 'completed' && oldTask.status !== 'completed') {
        const user = await User.findById(req.user.id);
        user.dailyEnergy = Math.max(0, user.dailyEnergy - oldTask.weight);
        await user.save();

        return res.json({
          dailyEnergy: user.dailyEnergy,
        });
      }
  
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
  
  