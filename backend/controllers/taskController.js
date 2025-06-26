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
      const oldTask = await Task.findOne({_id: id, userId: req.user.id});
      if (!oldTask) {
        return res.status(404).json({ message: 'Task not found' });
      }

      const updatedTask = await Task.findOneAndUpdate(
        { _id: id, userId: req.user.id },
        updates,
        { new: true }
      );

      if (updates.status === 'completed' && oldTask.status !== 'completed') {
        const user = await User.findById(req.user.id);
        user.dailyEnergy = Math.max(0, user.dailyEnergy - oldTask.weight);
        await user.save();

        return res.json({
          task: updatedTask,
          dailyEnergy: user.dailyEnergy,
        });
      }
  
      return res.json({ task: updatedTask });
    } catch (err) {
      console.error(err.stack)
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
      console.error(err.stack); 
      res.status(500).json({ error: err.message });
    }
  };
  
  