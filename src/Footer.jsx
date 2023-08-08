import React, { useContext } from "react";
import { DarkModeContext } from "./AppDarkModeProvider";

export default function Footer() {
  const{darkMode, toggleDarkMode} = useContext(DarkModeContext);
  return (
    <div
      className="footer"
      style={darkMode ? { backgroundColor: "#442b17" } : {}}
    ></div>
  );
}
