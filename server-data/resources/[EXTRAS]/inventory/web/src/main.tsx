import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MenuProvider from "./context/MenuContext";

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
