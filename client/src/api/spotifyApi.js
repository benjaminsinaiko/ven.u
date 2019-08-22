import axios from 'axios';
import toSlug from '../utils/toSlug';

export default async function getTopSongs(artistName) {
  try {
    const artistSlug = toSlug(artistName);
    const { data } = await axios.get(`/spotify/artists/songs/${artistSlug}`);
    return data;
  } catch (err) {
    return err;
  }
}

export async function getArtistImage(artistSlug) {
  try {
    const { data } = await axios.get(`spotify/artists/search/${artistSlug}`);
    const artistImgs = data.images;
    return artistImgs;
  } catch (err) {
    return err;
  }
}
