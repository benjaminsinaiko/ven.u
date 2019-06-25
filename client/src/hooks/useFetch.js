import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    };
    getApiData();
  }, [url]);

  return [data, loading];
};
export default useFetch;
