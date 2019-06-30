const express = require('express');

const router = express.Router();

const usersController = require('./controllers/usersController');

// Sign Up
router.post('/signup', usersController.signUp);

// Login
router.post('/login', usersController.login);

// Reset Password
router.post('/reset', usersController.resetPassword);

module.exports = router;
