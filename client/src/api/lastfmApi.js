import axios from 'axios';
import { toPlusSlug } from '../utils/toSlug';

export async function getBio(artist) {
  const artistSlug = toPlusSlug(artist);
  try {
    const { data } = await axios.get(`/lastfm/artists/${artistSlug}`);
    return data;
  } catch (err) {
    return err;
  }
}
