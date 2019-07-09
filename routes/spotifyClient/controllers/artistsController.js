const spotifyApi = require('../init');

/* ############### SEARCH ARTISTS ############### */
exports.artistSearch = function (req, res) {
  spotifyApi
    .searchArtists(req.params.artistName)
    .then(({ body }) => {
      res.json(body.artists.items[0]);
    })
    .catch(err => res.json(err));
};
