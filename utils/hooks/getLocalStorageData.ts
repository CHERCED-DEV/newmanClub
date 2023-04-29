import { useState, useEffect } from 'react';

export function useLocalStorageData<T>(key: string, property: string): [T | null] {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem(key);
    const parsedData = storedData ? JSON.parse(storedData) : null;
    setData(parsedData ? parsedData[property] : null);
  }, [key, property]);
  console.log(data + "dentro")
  return [data];
}