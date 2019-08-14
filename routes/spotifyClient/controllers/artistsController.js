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

/* ############### ARTIST TOP SONGS ############### */
exports.topSongs = function (req, res) {
  spotifyApi
    .searchArtists(req.params.artistName)
    .then(({ body }) => body.artists.items[0].id)
    .then(id => spotifyApi.getArtistTopTracks(`${id}`, 'US'))
    .then(({ body }) => {
      res.json(body.tracks);
    })
    .catch(err => res.json(err));
};
