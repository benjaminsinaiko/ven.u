const axios = require('axios');

const apiKey = process.env.SETLIST_FM_KEY;
const config = { headers: { 'x-api-key': apiKey } };
const baseUrl = 'https://api.setlist.fm/rest/1.0/';

/* ############### GET ARTISTS ############### */
exports.artistSetlists = async function (req, res) {
  try {
    const { data } = await axios.get(`${baseUrl}artist/${req.params.artistId}/setlists`, config);
    const setlists = data.setlist;
    res.json(setlists);
  } catch (err) {
    res.json(err);
  }
};
