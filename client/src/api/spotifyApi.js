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
