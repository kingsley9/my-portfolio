// DarkModeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('DARK_MODE')) || false
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      console.log(darkMode);
    } else {
      document.body.classList.remove('dark-mode');
      console.log(darkMode);
    }
    localStorage.setItem('DARK_MODE', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
