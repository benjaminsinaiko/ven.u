const express = require('express');
const Parse = require('parse/node');

const router = express.Router();

// All Venues
router.get('/', (req, res) => {
  const Venues = Parse.Object.extend('Venues');
  const query = new Parse.Query(Venues);
  query.ascending('venueName');
  query
    .find()
    .then((results) => {
      res.json(results);
    })
    .catch(err => res.json(err));
});

module.exports = router;
