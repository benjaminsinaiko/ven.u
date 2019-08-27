import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getApiData() {
      const { data } = await axios.get(url);
      setResponse(data);
      setLoading(false);
    }
    getApiData();
  }, [url]);

  return [response, loading];
};
export default useFetch;
