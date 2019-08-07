const axios = require('axios');

const apiKey = process.env.LAST_FM_KEY;
const baseUrl = 'http://ws.audioscrobbler.com/2.0/';

/* ############### GET ARTIST BIO ############### */
exports.artistSearch = async function (req, res) {
  const searchMethod = '?method=artist.getinfo&format=json&autocorrect=1';
  try {
    const { data } = await axios.get(
      `${baseUrl}${searchMethod}&api_key=${apiKey}&artist=${req.params.artistSlug}`,
    );
    const bioContent = data.artist.bio.content;
    const cleanBio = bioContent
      .split('<a')[0]
      .replace(/[\"\"]+/g, "'")
      .split(/\n\n/g);
    res.send(cleanBio);
  } catch (err) {
    res.json(err);
  }
};
