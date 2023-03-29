import { useState, useEffect } from 'react';

export function useFetch(url : string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error : any) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}