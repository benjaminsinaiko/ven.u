const express = require('express');
const artists = require('./artists');

const router = express.Router();

router.use('/test', (req, res) => {
  res.json({ msg: 'Test route works for setlistfm Artists' });
});

router.use('/artists', artists);

module.exports = router;

