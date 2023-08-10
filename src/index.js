import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppDarkModeProvider from "./AppDarkModeProvider";
import App from "./App";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
import AppListChange from "./AppListChange";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App>
      <AppDarkModeProvider>
        <AppListChange>
          <Header />
          <List />
          <Footer />
        </AppListChange>
      </AppDarkModeProvider>
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
