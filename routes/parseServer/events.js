const express = require('express');

const router = express.Router();

const eventsController = require('./controllers/eventsController');

// GET events search
router.get('/', eventsController.index);

// GET events search
router.get('/nextTen', eventsController.nextTenEvents);

// GET event
router.get('/:eventId', eventsController.searchEvent);

// GET future Events by Venue
router.get('/venue/:venueId', eventsController.futureEventsByVenue);

// GET past Events by Venue
router.get('/venue/:venueId', eventsController.pastEventsByVenue);

// POST create Event
router.post('/', eventsController.createEvent);

// POST update Event
router.post('/:eventId', eventsController.updateEvent);

module.exports = router;
