import { useState, useEffect } from 'react';
import { getArtistImage } from '../api/spotifyApi';

export default function useFetchImage(artistSlug) {
  const [artistImage, setArtistImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImage() {
      setLoading(true);
      try {
        const response = await getArtistImage(artistSlug, 'sm');
        setArtistImage(response);
      } catch (err) {
        setArtistImage(null);
      }
      setLoading(false);
    }
    fetchImage();
  }, [artistSlug]);

  return [artistImage, loading];
}
