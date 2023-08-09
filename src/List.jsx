import React, { useContext, useState } from "react";
import { DarkModeContext } from "./AppDarkModeProvider";
import { HiPencil } from "react-icons/hi";

export default function List() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState(" ");
  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, inputValue]);
    setInputValue(" ");
  };
  return (
    <div
      className="listcontainer"
      style={darkMode ? { backgroundColor: "#653e20" } : {}}
    >
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form onSubmit={submitHandler} className="formcontainer">
        <input
          type="text"
          id="todo"
          name="todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">
          <HiPencil style={{ color: "#fff" }} />
        </button>
      </form>
    </div>
  );
}
