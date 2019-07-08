const Parse = require('parse/node');

/* ############### ARTIST SEARCH ############### */
exports.artistSearch = function (req, res) {
  const Artists = Parse.Object.extend('Artists');
  const query = new Parse.Query(Artists);

  query.matches('artistName', `${req.params.artist}`, 'i');
  // query.fullText('artistName', `${req.params.artist}`);
  query.limit(10);
  query
    .find()
    .then((results) => {
      res.json(results);
      console.log('Artists found', results);
    })
    .catch((error) => {
      res.json(error);
      console.log('Error', error);
    });
};

/* ############### ADD ARTIST ############### */
exports.addArtist = function (req, res) {
  const Artists = Parse.Object.extend('Artists');
  const newArtist = new Artists();

  newArtist.set('artistName', req.body.artistName);

  newArtist
    .save()
    .then(artist => res.json(artist))
    .catch(err => res.json(err));
};
