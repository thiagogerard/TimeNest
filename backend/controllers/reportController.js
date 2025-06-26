const Task = require('../models/Task');

exports.weeklyReport = async (req, res) => {
  const userId = req.user.id;
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - 6);
  start.setHours(0, 0, 0, 0);
  const end = new Date(today);
  end.setHours(23, 59, 59, 999);

  try {
    const tasks = await Task.find({
      userId,
      createdAt: { $gte: start, $lte: end },
    });

    const report = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const dateStr = d.toISOString().slice(0, 10);

      const created = tasks.filter(
        t => t.createdAt.toISOString().slice(0, 10) === dateStr
      ).length;
      const completed = tasks.filter(
        t =>
          t.status === 'completed' &&
          t.updatedAt.toISOString().slice(0, 10) === dateStr
      ).length;

      report.push({ date: dateStr, created, completed });
    }

    return res.json(report);
  } catch (err) {
    console.error(err.stack);
    return res.status(500).json({ error: err.message });
  }
};