const express = require('express');

const router = express.Router();

const eventsController = require('./controllers/eventsController');

// GET count events
router.get('/count', eventsController.countEvents);

// GET all events
router.get('/', eventsController.allEvents);

// GET event
router.get('/event/:eventId', eventsController.searchEvent);

// GET future Events by Venue
router.get('/venue/:venueId', eventsController.futureEventsByVenue);

// GET past Events by Venue
router.get('/venue/past/:venueId', eventsController.pastEventsByVenue);

// GET events search
router.get('/:limit?/:skip?', eventsController.index);

// POST create Event
router.post('/', eventsController.createEvent);

// POST update Event
router.post('/event/:eventId', eventsController.updateEvent);


module.exports = router;
