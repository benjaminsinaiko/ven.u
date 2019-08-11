import { useState, useEffect } from 'react';

import { getBio } from '../api/lastfmApi';

function useFetchBio(artistName) {
  const [bio, setBio] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBio() {
      const bio = await getBio(artistName);
      bio ? setBio(bio) : setBio(null);
      setLoading(false);
    }
    fetchBio();
  }, [artistName]);

  return [bio, loading];
}

export default useFetchBio;
