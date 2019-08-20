const express = require('express');

const router = express.Router();
const artistsController = require('./controllers/artistsController');

// GET artists list
router.get('/:artistSlug', artistsController.artistSearch);


module.exports = router;
