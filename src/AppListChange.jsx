import React, { createContext, useState } from "react";

export const ListChangeContext = createContext();

export default function AppListChange({ children }) {
  const [allList, setAllList] = useState(false);
  const [achieveList, setAchieveList] = useState(true);
  const [doneList, setDoneList] = useState(false);
  const showAllList = () => {
    setAllList(true);
    setAchieveList(false);
    setDoneList(false);
  };
  const showAchieveList = () => {
    setAchieveList(true);
    setAllList(false);
    setDoneList(false);
  };
  const showDoneList = () => {
    setDoneList(true);
    setAchieveList(false);
    setAllList(false);
  };
  return (
    <ListChangeContext.Provider
      value={{
        allList,
        achieveList,
        doneList,
        showAllList,
        showAchieveList,
        showDoneList,
      }}
    >
      {children}
    </ListChangeContext.Provider>
  );
}
