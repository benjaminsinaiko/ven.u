const express = require('express');
const Parse = require('parse/node');

const router = express.Router();

const eventsController = require('./controllers/eventsController');

// GET catalog home page.
// router.get('/', book_controller.index);

// GET Events search
router.get('/', eventsController.index);

// POST create Event
router.post('/', eventsController.createEvent);

// Events by Venue
router.get('/:venueId', eventsController.searchByVenue);

module.exports = router;
