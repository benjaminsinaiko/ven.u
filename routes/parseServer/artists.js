const express = require('express');

const router = express.Router();

const artistsController = require('./controllers/artistsController');

// GET artists search
router.get('/:artist', artistsController.artistSearch);

// POST add artists
router.post('/', artistsController.addArtist);

module.exports = router;
