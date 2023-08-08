import React, { useContext } from "react";
import { DarkModeContext } from "./AppDarkModeProvider";

export default function List() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  return (
    <div
      className="listcontainer"
      style={darkMode ? { backgroundColor: "#653e20" } : {}}
    ></div>
  );
}
