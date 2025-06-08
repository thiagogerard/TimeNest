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
