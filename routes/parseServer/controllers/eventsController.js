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
  const Events = Parse.Object.extend('Events');
  const newEvent = new Events();

  newEvent.set('eventStartDateTime', new Date());
  newEvent.set('eventEndDateTime', new Date());
  newEvent.set('artist', new Parse.Object('Artists'));
  newEvent.set('venue', new Parse.Object('Venues'));
  newEvent.set('NotPublished', true);
  newEvent.set('short_title', 'A string');
  newEvent.set('title', 'A string');

  newEvent
    .save()
    .then((event) => {
      res.json(event);
    })
    .catch(err => res.json(err));
};
