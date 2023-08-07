import React, { Children } from "react";

export default function AppDarkModeProvider({ children }) {
  return <div className="appdarkmodeprovider">{children}</div>;
}
