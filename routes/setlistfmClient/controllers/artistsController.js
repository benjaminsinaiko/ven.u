const axios = require('axios');

const apiKey = process.env.SETLIST_FM_KEY;
const config = { headers: { 'x-api-key': apiKey } };
const baseUrl = 'https://api.setlist.fm/rest/1.0/search/artists?';

/* ############### GET ARTISTS ############### */
exports.artistSearch = async function (req, res) {
  try {
    const { data } = await axios.get(`${baseUrl}artistName=${req.params.artistSlug}&p=1&sort=relevance`, config);
    const artistList = data.artist.splice(0, 5);
    res.json(artistList);
  } catch (err) {
    res.json(err);
  }
};
