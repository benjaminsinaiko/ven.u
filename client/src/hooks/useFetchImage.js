import { useState, useEffect } from 'react';
import axios from 'axios';
import toSlug from '../utils/toSlug';

export default function useFetchImage(event) {
  const [fetchImage, setFetchImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImage() {
      setLoading(true);
      try {
        const artistSlug = toSlug(event.artist.artistName);
        const { data } = await axios.get(`/spotify/artists/search/${artistSlug}`);
        const artistImg = data.images ? data.images[2].url : null;
        setFetchImage(artistImg);
      } catch (error) {
        return error;
      }
      setLoading(false);
    }
    fetchImage();
  }, [event.artist.artistName]);

  return [fetchImage, loading];
}
