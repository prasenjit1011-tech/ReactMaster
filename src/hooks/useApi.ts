import { useEffect, useState } from 'react';

type ApiProps = {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: any;
};

export default function useApi({
  url,
  method = 'GET',
  headers = {},
  body
}: ApiProps) {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method,
          headers,
          body: body ? JSON.stringify(body) : undefined,
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort(); // cleanup (important!)
    };
  }, [url, method, body]);

  return { 
        name: 'useApi',
        description: 'API Hook Description...',
        data, 
        loading, 
        error 
    };
}