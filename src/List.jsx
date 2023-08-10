import React, { useContext, useState } from "react";
import { DarkModeContext } from "./AppDarkModeProvider";
import { HiPencil } from "react-icons/hi";
import { ListChangeContext } from "./AppListChange";

export default function List() {
  const { darkMode } = useContext(DarkModeContext);
  const {
    allList,
    achieveList,
    doneList
  } = useContext(ListChangeContext);
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState(" ");
  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, inputValue]);
    setInputValue(" ");
  };
  const changeShowMode = achieveList
    ? "showachieve"
    : allList
    ? "showall"
    : doneList
    ? "showdone"
    : " ";

  const showMode = `showmode ${changeShowMode}`;
  return (
    <div
      className="listcontainer"
      style={darkMode ? { backgroundColor: "#653e20" } : {}}
    >
      <div className={showMode}>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
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
