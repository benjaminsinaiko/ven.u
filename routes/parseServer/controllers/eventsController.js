const Parse = require('parse/node');

/* ############### ALL EVENTS ############### */
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

/* ############### GET NEXT 10 EVENTS ############### */
exports.nextTenEvents = function (req, res) {
  const Events = Parse.Object.extend('Events');
  const queryEvents = new Parse.Query(Events);

  queryEvents.ascending('eventStartDateTime');
  queryEvents.greaterThanOrEqualTo('eventStartDateTime', new Date('2019-01-01T05:23:19.559Z'));
  queryEvents.limit(10);
  queryEvents.include('artist');
  queryEvents.include('venue');
  queryEvents.select([
    'eventStartDateTime.iso',
    'title',
    'venue.venueName',
    'venue.venuAvatar',
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
    'eventStartDateTime.iso',
    'eventEndDateTime.iso',
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
    'eventStartDateTime.iso',
    'eventEndDateTime.iso',
    'title',
    'venue.venueName',
    'artist.artistName',
  ]);
  queryEvents.greaterThanOrEqualTo('eventStartDateTime', new Date('2019-01-01T05:23:19.559Z'));
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
    'eventStartDateTime.iso',
    'eventEndDateTime.iso',
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

/* ############### CREATE EVENT ############### */
exports.createEvent = async (req, res) => {
  const Events = Parse.Object.extend('Events');
  // increment eventId
  const queryEvents = new Parse.Query(Events);
  queryEvents.descending('eventId');
  queryEvents.first();
  const events = await queryEvents.find();
  let lastId = events[0].get('eventId');

  const addedEvents = [];

  req.body.forEach((event) => {
    // create new event
    const newEvent = new Events();
    newEvent.set('eventId', lastId);
    newEvent.set('eventStartDateTime', new Date(event.eventStartDateTime));
    newEvent.set('eventEndDateTime', new Date(event.eventEndDateTime));
    newEvent.set('artist', {
      __type: 'Pointer',
      className: 'Artists',
      objectId: event.artist,
    });
    newEvent.set('venue', {
      __type: 'Pointer',
      className: 'Venues',
      objectId: event.venue,
    });
    newEvent.set('short_title', event.title);
    newEvent.set('title', event.title);
    newEvent.increment('eventId');
    addedEvents.push(newEvent);
    lastId += 1;
  });

  try {
    Parse.Object.saveAll(addedEvents).then((results) => {
      res.json(results);
    });
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
