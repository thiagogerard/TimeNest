const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

const verifyToken = require('../middleware/verifyToken');

router.get('/me', verifyToken, (req, res) => {
  res.json({ message: 'Access granted', userId: req.user.id });
});

module.exports = router;
