const express = require('express');

const router = express.Router();
const artistsController = require('./controllers/artistsController');

// GET search artists
router.get('/search/:artistName', artistsController.artistSearch);

module.exports = router;
