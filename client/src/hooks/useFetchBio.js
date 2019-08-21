import { useState, useEffect } from 'react';

import { getBio } from '../api/lastfmApi';

function useFetchBio(artistName) {
  const [bio, setBio] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBio() {
      const bio = await getBio(artistName);
      if (!bio) {
        setBio(null);
      } else if (bio[0] === '') {
        setBio(null);
      } else {
        setBio(bio);
      }
      setLoading(false);
    }
    fetchBio();
  }, [artistName]);

  return [bio, loading];
}

export default useFetchBio;
