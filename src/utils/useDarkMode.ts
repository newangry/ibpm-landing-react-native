import { useState, useEffect } from "react"

export const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const updateTheme = (evt: MediaQueryListEvent) => {
      setDarkMode(evt.matches);
    };


    const query = window.matchMedia("(prefers-color-scheme: dark)");
    query.addEventListener("change", updateTheme);
    
    setDarkMode(query.matches)

    return () => {
      query.removeEventListener("change", updateTheme);
    };
  }, []);

  return isDarkMode
}

