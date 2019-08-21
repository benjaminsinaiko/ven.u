import axios from 'axios';
import toSlug from '../utils/toSlug';

export async function getSetlistArtists(artistName) {
  const artistSlug = toSlug(artistName);
  try {
    const { data } = await axios.get(`/setlistfm/artists/${artistSlug}`);
    if (data.name === 'Error') {
      console.log('error');
    } else {
      return data;
    }
  } catch (err) {
    return err;
  }
}

export async function getArtistSetlists(artistId) {
  try {
    const { data } = await axios.get(`/setlistfm/setlists/${artistId}`);
    if (data.name === 'Error') {
      console.log('error');
    } else {
      return data;
    }
  } catch (err) {
    return err;
  }
}
