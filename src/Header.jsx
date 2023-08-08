import React, { useContext } from "react";
import { HiLightBulb } from "react-icons/hi";
import { DarkModeContext } from "./AppDarkModeProvider";

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const darkModeHandler = () => {
    toggleDarkMode();
  };
  return (
    <div
      className="header"
      style={darkMode ? { backgroundColor: "#442b17" } : {}}
    >
      <button className="darkmodebtn" onClick={darkModeHandler}>
        <HiLightBulb
          style={darkMode ? { color: "#fff" } : { color: "#986843" }}
        />
      </button>
    </div>
  );
}
