const express = require('express');

const router = express.Router();

const venuesController = require('./controllers/venuesController');

// All Venues
router.get('/', venuesController.index);

module.exports = router;
