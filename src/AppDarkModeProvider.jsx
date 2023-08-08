import React, { children, createContext, useState } from "react";

export const DarkModeContext = createContext();

export default function AppDarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };
  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggleDarkMode }}
      className="appdarkmodeprovider"
    >
      {children}
    </DarkModeContext.Provider>
  );
}
