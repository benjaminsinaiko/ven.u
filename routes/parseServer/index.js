const express = require('express');
const artists = require('./artists');
const venues = require('./venues');
const events = require('./events');

const router = express.Router();

router.use('/artists', artists);
router.use('/venues', venues);
router.use('/events', events);

module.exports = router;
