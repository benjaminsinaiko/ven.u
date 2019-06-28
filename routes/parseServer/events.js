const express = require('express');

const router = express.Router();

const eventsController = require('./controllers/eventsController');

// GET catalog home page.
// router.get('/', book_controller.index);
router.get('/test', (req, res) => {
  res.json({ msg: 'Test route' });
});

// GET Events search
router.get('/', eventsController.index);

// GET Event
router.get('/:eventId', eventsController.searchEvent);

// GET Future Events by Venue
router.get('/venue/:venueId', eventsController.futureEventsByVenue);

// GET Past Events by Venue
router.get('/venue/:venueId', eventsController.pastEventsByVenue);

// POST create Event
router.post('/', eventsController.createEvent);

module.exports = router;
