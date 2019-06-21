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

// POST create Event
router.post('/', eventsController.createEvent);

// Events by Venue
router.get('/:venueId', eventsController.searchByVenue);

module.exports = router;
