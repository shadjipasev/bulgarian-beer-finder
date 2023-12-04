import { useState } from "react";

export default function useLocalSorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }

    return defaultValue;
  });

  const setLocalStorage = (value) => {
    setState(value);

    const storeValue = JSON.stringify(value);

    localStorage.setItem(key, storeValue);
  };

  return [state, setLocalStorage];
}
