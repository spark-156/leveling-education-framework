import { useEffect, useState } from "react";
import { LocalStorageEnum } from "../types/LocalStorageEnum";

export function useLocalStorage<Type>(key: LocalStorageEnum) {
  const [value, setValue] = useState<Type | null>(null);

  useEffect(() => {
    getItem();
  }, []);

  function setItem(value: Type) {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  }

  function getItem(): Type {
    const value = localStorage.getItem(key);
    // @ts-ignore Can be ignored because it is always set because of this hook
    const parsedValue = JSON.parse(value);
    setValue(parsedValue);
    return parsedValue;
  }

  function removeItem() {
    localStorage.removeItem(key);
    setValue(null);
  }

  return { value, setItem, getItem, removeItem };
}
