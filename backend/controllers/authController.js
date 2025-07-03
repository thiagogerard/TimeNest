const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {

  console.log('JWT_SECRET:', process.env.JWT_SECRET);

  const { name, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already in use' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, dailyEnergy: 100, lastEnergyReset: new Date() });
    const now = new Date();
    const last = user.lastEnergyReset || 0;
    const ONE_DAY = 24 * 60 *60 * 1000;

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' }); 

    res.status(201).json({ 
      token,
      user: {
        id: user._id, 
        name: user.name,
        email: user.email,
        dailyEnergy: user.dailyEnergy
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });

    const now = new Date()
    const last = user.lastEnergyReset || 0
    const ONE_DAY = 24 * 60 * 60 * 1000
    if (now - last >= ONE_DAY) {
      user.dailyEnergy = 100
      user.lastEnergyReset = now
      await user.save()
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user: {
      id: user._id, 
      name: user.name, 
      email: user.email,
      dailyEnergy: user.dailyEnergy
      } 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
