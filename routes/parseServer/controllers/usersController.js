const Parse = require('parse/node');
const moment = require('moment');

// get start of day in utc
const startOfDay = moment().startOf('day');
const utcStart = moment.utc(startOfDay).format();

/* ############### SIGN UP ############### */
exports.signUp = async function (req, res) {
  const user = new Parse.User();
  user.set('username', req.body.username);
  user.set('password', req.body.password);
  user.set('email', req.body.username);

  const newUser = await user.signUp();
  try {
    console.log('new user', newUser);
    res.json(newUser);
  } catch (e) {
    console.log('error', e);
  }
};

/* ############### LOGIN ############### */
exports.login = async function (req, res) {
  // Create a new instance of the user class
  const user = await Parse.User.logIn(req.body.username, req.body.password);

  try {
    console.log(`User logged in: ${user.get('fullname')}`);
    res.json(user);
  } catch (e) {
    console.log(e);
  }
};

/* ############### RESET PASSWORD ############### */
exports.resetPassword = async function (req, res) {
  const user = await Parse.User.requestPasswordReset('req.body.email');
  try {
    console.log(`A reset email has been sent to ${user}`);
  } catch (e) {
    console.log(e);
  }
};

/* ############### USER HISTORY ############### */
exports.userHistory = function (req, res) {
  const History = Parse.Object.extend('UserHistory');
  const queryHistory = new Parse.Query(History);

  queryHistory.equalTo('user', {
    __type: 'Pointer',
    className: '_User',
    objectId: req.params.userId,
  });
  queryHistory.limit(1000);
  queryHistory.include('event');
  queryHistory.descending('event.eventStartDateTime');
  queryHistory.include('artist');
  queryHistory.select([
    'event.eventStartDateTime',
    'event.venue',
    'event.title',
    'event.artist.artistName',
  ]);

  queryHistory
    .find()
    .then((events) => {
      res.json(events);
    })
    .catch(err => res.json(err));
};

/* ############### USER ATTENDING ############### */
exports.userAttending = function (req, res) {
  const Attending = Parse.Object.extend('UserAttending');
  const queryAttending = new Parse.Query(Attending);

  queryAttending.equalTo('userId', {
    __type: 'Pointer',
    className: '_User',
    objectId: req.params.userId,
  });
  queryAttending.limit(1000);
  queryAttending.include('eventId');
  queryAttending.greaterThanOrEqualTo('eventId.eventStartDateTime', new Date(utcStart));
  queryAttending.descending('eventId.eventStartDateTime');
  queryAttending.include('artist');
  queryAttending.select([
    'eventId.eventStartDateTime',
    'eventId.venue',
    'eventId.title',
    'eventId.artist.artistName',
  ]);

  queryAttending
    .find()
    .then((events) => {
      res.json(events);
    })
    .catch(err => res.json(err));
};
