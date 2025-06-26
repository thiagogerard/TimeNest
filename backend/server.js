const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cron = require('node-cron');
const User = require('./models/User');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('TimeNest API is running 🚀');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log('MongoDB connection failed:', err));

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

cron.schedule('0 0 * * *', async () => {
  try {
    await User.updateMany({}, {
      dailyEnergy: 100,
      lastEnergyReset: new Date()
    });
    console.log('Daily energy reset for all users')
  } catch (err) {
    console.error('Error reseting daily energy:', err);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});