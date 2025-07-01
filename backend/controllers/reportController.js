const Task = require('../models/Task');

exports.weeklyReport = async (req, res) => {
  const userId = req.user.id;
  const today = new Date();
  today.setHours(23,59,59,999);
  const start = new Date(today);
  start.setDate(start.getDate() - 6);
  start.setHours(0,0,0,0);

  try {
    const createdTasks = await Task.find({
      userId,
      createdAt: { $gte: start, $lte: today },
    });

    const completedTasks = await Task.find({
      userId,
      status: 'completed',
      updatedAt: { $gte: start, $lte: today },
    });

    const report = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      const dateStr = d.toISOString().slice(0,10);

      const createdCount = createdTasks.filter(
        t => t.createdAt.toISOString().slice(0,10) === dateStr
      ).length;

      const completedCount = completedTasks.filter(
        t => t.updatedAt.toISOString().slice(0,10) === dateStr
      ).length;

      report.push({
        date: dateStr,
        created: createdCount,
        completed: completedCount
      });
    }

    return res.json(report);
  } catch (err) {
    console.error(err.stack);
    return res.status(500).json({ error: err.message });
  }
};