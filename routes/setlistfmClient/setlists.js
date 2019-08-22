const express = require('express');

const router = express.Router();
const setlistsController = require('./controllers/setlistsController');

// GET artists list
router.get('/:artistId', setlistsController.artistSetlists);

module.exports = router;
