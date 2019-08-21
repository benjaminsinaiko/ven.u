import axios from 'axios';
import toSlug from '../utils/toSlug';

export async function getSetlistArtists(artistName) {
  const artistSlug = toSlug(artistName);
  try {
    const { data } = await axios.get(`/setlistfm/artists/${artistSlug}`);
    return data;
  } catch (err) {
    return err;
  }
}

export async function getArtistSetlists(artistId) {
  try {
    const { data } = await axios.get(`/setlistfm/setlists/${artistId}`);
    return data;
  } catch (err) {
    return err;
  }
}
