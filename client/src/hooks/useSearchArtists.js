import { useState, useEffect } from 'react';

import { searchParseArtists } from '../api/parseApi';
import useDebounce from './useDebounce';

const useSearchArtists = searchString => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(searchString, 300);

  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm.length > 2) {
      setLoading(true);

      searchParseArtists(debouncedSearchTerm).then(results => {
        setArtists(results);
        setLoading(false);
      });
    } else {
      setArtists([]);
    }
  }, [debouncedSearchTerm]);

  return { artists, loading };
};

export default useSearchArtists;
