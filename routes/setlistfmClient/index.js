const express = require('express');
const artists = require('./artists');
const setlists = require('./setlists');

const router = express.Router();

router.use('/artists', artists);
router.use('/setlists', setlists);

module.exports = router;
