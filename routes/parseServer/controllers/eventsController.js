const Parse = require('parse/node');

exports.index = function (req, res) {
  const Events = Parse.Object.extend('Events');
  const queryEvents = new Parse.Query(Events);
  queryEvents.equalTo('NotPublished', true);
  queryEvents.descending('eventStartDateTime');
  queryEvents
    .find()
    .then((events) => {
      res.json(events);
    })
    .catch(err => res.json(err));
};

exports.searchByVenue = function (req, res) {
  const Events = Parse.Object.extend('Events');
  const queryEvents = new Parse.Query(Events);

  const Venues = Parse.Object.extend('Venues');
  const venue = new Venues();
  venue.id = req.body.venueId;

  queryEvents.equalTo('venue', venue);
  queryEvents
    .find()
    .then((events) => {
      res.json(events);
    })
    .catch(err => res.json(err));
};

exports.createEvent = async (req, res) => {
  // set artist pointer
  const Artists = Parse.Object.extend('Artists');
  const newArtist = new Artists();
  newArtist.set('id', req.body.artist);

  // set venue pointer
  const Venues = Parse.Object.extend('Venues');
  const newVenue = new Venues();
  newVenue.set('id', req.body.venue);

  const Events = Parse.Object.extend('Events');
  // increment eventId
  const queryEvents = new Parse.Query(Events);
  queryEvents.descending('eventId');
  queryEvents.limit(1);
  const events = await queryEvents.find();
  const lastId = events[0].get('eventId');

  // create new event
  const newEvent = new Events();
  newEvent.set('eventId', lastId);
  newEvent.set('eventStartDateTime', new Date());
  newEvent.set('eventEndDateTime', new Date());
  newEvent.set('artist', newArtist);
  newEvent.set('venue', newVenue);
  newEvent.set('NotPublished', true);
  newEvent.set('short_title', 'A string');
  newEvent.set('title', 'A string');
  newEvent.increment('eventId');

  const savedEvent = await newEvent.save();
  try {
    res.json([lastId, savedEvent]);
  } catch (err) {
    res.send(err);
  }
};
