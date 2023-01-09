import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const mount = (element) => {
  const root = ReactDOM.createRoot(element);
  root.render(<App />);
};

//If we are running project as separate entity
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#marketing_root");
  if (element) {
    mount(element);
  }
}

export default mount;
