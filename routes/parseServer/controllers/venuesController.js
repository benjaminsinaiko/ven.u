const Parse = require('parse/node');

exports.index = async (req, res) => {
  const Venues = Parse.Object.extend('Venues');
  const queryVenues = new Parse.Query(Venues);

  queryVenues.equalTo('testVenue', true);
  queryVenues.ascending('venueName');

  const venues = await queryVenues.find();
  try {
    res.json(venues);
  } catch (err) {
    res.json(err);
  }
};
