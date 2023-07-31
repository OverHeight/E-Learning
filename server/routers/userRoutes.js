// Import Controllers
const express = require('express');

const userController = require('../controllers/userController')

// Routes
const router = express.Router();

router.post('/login', userController.loginUser)
router.post('/register', userController.registerUser)

module.exports = router;
