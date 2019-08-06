/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const Parse = require('parse/node');
const moment = require('moment');

// get start of day in utc
const startOfDay = moment().startOf('day');
const utcStart = moment.utc(startOfDay).format();

/* ############### ALL UPCOMING EVENTS ############### */
exports.index = function (req, res) {
  const Events = Parse.Object.extend('Events');
  const queryEvents = new Parse.Query(Events);
  queryEvents.notEqualTo('NotPublished', true);
  queryEvents.greaterThanOrEqualTo('eventStartDateTime', new Date(utcStart));
  queryEvents.ascending('eventStartDateTime');
  queryEvents.limit(+req.params.limit);
  queryEvents.skip(+req.params.skip);
  queryEvents.include('artist');
  queryEvents.include('venue');
  queryEvents.select([
    'eventStartDateTime.iso',
    'title',
    'venue.venueName',
    'venue.venuAvatar',
    'venue.Address',
    'venue.venueCity',
    'artist.artistName',
  ]);

  queryEvents
    .find()
    .then((events) => {
      res.json(events);
    })
    .catch(err => res.json(err));
};

/* ############### GET EVENT ############### */
exports.searchEvent = function (req, res) {
  const Events = Parse.Object.extend('Events');
  const queryEvents = new Parse.Query(Events);

  queryEvents.equalTo('objectId', req.params.eventId);
  queryEvents.include('artist');
  queryEvents.include('venue');
  queryEvents.select([
    'eventStartDateTime',
    'eventEndDateTime',
    'title',
    'venue.venueName',
    'artist.artistName',
  ]);

  queryEvents
    .find()
    .then((events) => {
      res.json(events);
    })
    .catch(err => res.json(err));
};

/* ############### FUTURE EVENTS BY VENUE ############### */
exports.futureEventsByVenue = function (req, res) {
  const Events = Parse.Object.extend('Events');
  const queryEvents = new Parse.Query(Events);

  queryEvents.equalTo('venue', {
    __type: 'Pointer',
    className: 'Venues',
    objectId: req.params.venueId,
  });

  queryEvents.include('artist');
  queryEvents.include('venue');
  queryEvents.select([
    'eventStartDateTime',
    'eventEndDateTime',
    'title',
    'venue.venueName',
    'artist.artistName',
  ]);
  queryEvents.greaterThanOrEqualTo('eventStartDateTime', new Date(utcStart));
  queryEvents.ascending('eventStartDateTime');

  queryEvents
    .find()
    .then((events) => {
      res.json(events);
    })
    .catch(err => res.json(err));
};

/* ############### PAST EVENTS BY VENUE ############### */
exports.pastEventsByVenue = function (req, res) {
  const Events = Parse.Object.extend('Events');
  const queryEvents = new Parse.Query(Events);

  queryEvents.equalTo('venue', {
    __type: 'Pointer',
    className: 'Venues',
    objectId: req.params.venueId,
  });

  queryEvents.include('artist');
  queryEvents.include('venue');
  queryEvents.select([
    'eventStartDateTime',
    'eventEndDateTime',
    'title',
    'venue.venueName',
    'artist.artistName',
  ]);
  queryEvents.lessThan('eventStartDateTime', new Date('2019-01-01T05:23:19.559Z'));
  queryEvents.ascending('eventStartDateTime');

  queryEvents
    .find()
    .then((events) => {
      res.json(events);
    })
    .catch(err => res.json(err));
};

/* ############### CREATE EVENTS ############### */
exports.createEvent = async (req, res) => {
  const Events = Parse.Object.extend('Events');
  const queryEvents = new Parse.Query(Events);
  queryEvents.descending('eventId');

  // get most recent eventId
  const events = await queryEvents.first();
  let lastId = events.get('eventId');

  const eventsToSave = [];

  // /////// LOOP STARTS
  for (const event of req.body) {
    lastId += 1;
    // create new event
    const newEvent = new Events();
    newEvent.set('eventId', lastId);
    newEvent.set('eventStartDateTime', new Date(event.eventStartDateTime));
    newEvent.set('eventEndDateTime', new Date(event.eventEndDateTime));
    newEvent.set('venue', {
      __type: 'Pointer',
      className: 'Venues',
      objectId: event.venue,
    });
    newEvent.set('short_title', event.title);
    newEvent.set('title', event.title);

    // check if artistId exists
    if (event.artist === undefined) {
      // create artist, add new objectId to pointer
      const Artists = Parse.Object.extend('Artists');
      const newArtist = new Artists();
      newArtist.set('artistName', event.artistName);
      const artist = await newArtist.save();
      newEvent.set('artist', {
        __type: 'Pointer',
        className: 'Artists',
        objectId: artist.id,
      });
    } else {
      // add objectId to pointer
      newEvent.set('artist', {
        __type: 'Pointer',
        className: 'Artists',
        objectId: event.artist,
      });
    }
    // add event to array
    eventsToSave.push(newEvent);
  }
  // /////// LOOP ENDS

  try {
    const savedEvents = await Parse.Object.saveAll(eventsToSave);
    res.json(savedEvents);
  } catch (err) {
    res.json(err);
  }
};

/* ############### UPDATE EVENT ############### */
exports.updateEvent = async function (req, res) {
  const Events = Parse.Object.extend('Events');
  const query = new Parse.Query(Events);
  query.get(req.params.eventId).then((event) => {
    if (req.body.eventStartDateTime) event.set('eventStartDateTime', new Date(req.body.eventStartDateTime));
    if (req.body.eventEndDateTime) event.set('eventEndDateTime', new Date(req.body.eventEndDateTime));
    if (req.body.artist) {
      event.set('artist', {
        __type: 'Pointer',
        className: 'Artists',
        objectId: req.body.artist,
      });
    }
    if (req.body.venue) {
      event.equalTo('venue', {
        __type: 'Pointer',
        className: 'Venues',
        objectId: req.body.venue,
      });
    }
    if (req.body.title) event.set('short_title', req.body.title);
    event.set('title', req.body.title);

    event
      .save()
      .then((updatedEvent) => {
        res.json(updatedEvent);
      })
      .catch(err => res.json(err));
  });
};
