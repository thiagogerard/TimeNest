const express = require('express');
const router = express.Router();
const { weeklyReport } = require('../controllers/reportController');
const verifyToken = require('../middleware/verifyToken');

router.get('/weekly', verifyToken, weeklyReport);

module.exports = router;