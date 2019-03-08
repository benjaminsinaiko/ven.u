const express = require('express')
const Parse = require('parse/node')
const router = express.Router()

// Events by Venue
router.get('/:venueId', (req, res) => {
  const Events = Parse.Object.extend('Events')
  const queryEvents = new Parse.Query(Events)

  const Venues = Parse.Object.extend('Venues')
  const venue = new Venues()
  venue.id = `${req.params.venueId}`

  queryEvents.equalTo('venue', venue)
  queryEvents
    .find()
    .then(events => {
      res.json(events)
    })
    .catch(err => res.json(err))
})

module.exports = router
