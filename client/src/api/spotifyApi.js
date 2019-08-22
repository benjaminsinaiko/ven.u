import axios from 'axios';
import toSlug from '../utils/toSlug';
import crowdImg from '../assets/crowdImage_small.jpg';

export default async function getTopSongs(artistName) {
  try {
    const artistSlug = toSlug(artistName);
    const { data } = await axios.get(`/spotify/artists/songs/${artistSlug}`);
    return data;
  } catch (err) {
    return err;
  }
}

export async function getArtistImage(artistSlug, size) {
  try {
    const { data } = await axios.get(`spotify/artists/search/${artistSlug}`);
    const artistImgs = data.images;
    if (artistImgs) {
      switch (size) {
        case 'lg':
          return artistImgs[0].url;
        case 'md':
          return artistImgs[1].url;
        case 'sm':
          return artistImgs[2].url;
        default:
          return artistImgs[0].url;
      }
    } else {
      return crowdImg;
    }
  } catch (err) {
    return err;
  }
}
