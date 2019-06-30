const express = require('express');
const artists = require('./artists');
const venues = require('./venues');
const events = require('./events');
const users = require('./users');

const router = express.Router();

router.use('/artists', artists);
router.use('/venues', venues);
router.use('/events', events);
router.use('/users', users);

module.exports = router;
