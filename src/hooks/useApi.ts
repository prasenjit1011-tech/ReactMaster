import { useEffect, useState } from "react";

type ApiProps = {
  url: string;
  method?: string;
};

export default function useApi({url}: ApiProps) {
  const [data, setData] = useState<any[] | null>(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(response => response.json())
        .then(json => {
            setData(json);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
        .finally(() => {
            console.log('Fetch operation completed.');
        });
    }, 1000);
  }, []);


  return {
    name: 'useApi',
    description: 'API Hook Description...',
    data
  };
}