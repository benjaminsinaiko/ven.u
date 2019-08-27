const express = require('express');

const router = express.Router();

const usersController = require('./controllers/usersController');

// Sign Up
router.post('/signup', usersController.signUp);

// Login
router.post('/login', usersController.login);

// Reset Password
router.post('/reset', usersController.resetPassword);

// GET user history
router.get('/history/:userId', usersController.userHistory);

// GET user attending
router.get('/upcoming/:userId', usersController.userAttending);

module.exports = router;
