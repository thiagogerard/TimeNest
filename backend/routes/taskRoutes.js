const express = require('express');
const router = express.Router();
const { createTask } = require('../controllers/taskController');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, createTask);

module.exports = router;
