import { useEffect, useState } from "react";

export const useLocalStorage = (intialValue: any, key: string) => {
  const [data, setData] = useState(() => {
    const localStorage = window.localStorage.getItem(key);
    if (!localStorage) return intialValue;
    return JSON.parse(localStorage);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};
