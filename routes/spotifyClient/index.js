const express = require('express');
const artists = require('./artists');

const router = express.Router();

router.use('/artists', artists);

module.exports = router;
