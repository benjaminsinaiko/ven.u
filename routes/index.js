const express = require('express');
const parseServerRouter = require('./parseServer');
const spotifyClientRouter = require('./spotifyClient');
const lastfmClient = require('./lastfmClient');
const setlistfmClient = require('./setlistfmClient');

const router = express.Router();

router.use('/parse', parseServerRouter);
router.use('/spotify', spotifyClientRouter);
router.use('/lastfm', lastfmClient);
router.use('/setlistfm', setlistfmClient);

router.get('*', (req, res) => {
  res.render('index');
});

module.exports = router;
