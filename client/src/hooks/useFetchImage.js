import { useState, useEffect } from 'react';
import { getArtistImage } from '../api/spotifyApi';

export default function useFetchImage(artistSlug, size = 'sm') {
  const [artistImage, setArtistImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImage() {
      setLoading(true);
      try {
        const response = await getArtistImage(artistSlug, size);
        setArtistImage(response);
      } catch (err) {
        setArtistImage(null);
      }
      setLoading(false);
    }
    fetchImage();
  }, [artistSlug, size]);

  return [artistImage, loading];
}
