import { useState, useEffect } from 'react';
import axios from 'axios';

const useSearchArtists = searchString => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchString.length > 2) {
      setLoading(true);

      const debounced = setTimeout(() => {
        axios
          .get(`/parse/artists/${searchString}`)
          .then(({ data }) => {
            console.log('parse query');
            setArtists(data);
            setLoading(false);
          })
          .catch(e => {
            setLoading(false);
          });
      }, 300);

      return () => {
        clearTimeout(debounced);
      };
    }
  }, [searchString]);

  return { artists, loading };
};

export default useSearchArtists;
