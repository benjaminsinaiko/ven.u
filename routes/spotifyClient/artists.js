const express = require('express');

const router = express.Router();
const artistsController = require('./controllers/artistsController');

// GET search artists
router.get('/search/:artistName', artistsController.artistSearch);

// GET artist top songs
router.get('/songs/:artistName', artistsController.topSongs);

module.exports = router;
