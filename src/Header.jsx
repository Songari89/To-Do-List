import React, { useContext } from "react";
import { HiLightBulb } from "react-icons/hi";
import { DarkModeContext } from "./AppDarkModeProvider";
import { ListChangeContext } from "./AppListChange";

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const {showAllList, showAchieveList, showDoneList} =useContext(ListChangeContext);
  const darkModeHandler = () => {
    toggleDarkMode();
  };
  const allListHandler = () => {showAllList()};
  const achieveListHandler = () => {showAchieveList()};
  const doneListHandler = () => {showDoneList()}

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
      <div className="listbtn">
        <button onClick={allListHandler}>All</button>
        <button onClick={achieveListHandler}>Achieve</button>
        <button onClick={doneListHandler}>Done</button>
      </div>
    </div>
  );
}
