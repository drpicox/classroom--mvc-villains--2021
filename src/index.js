import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { App } from "./App";
import { createMainStore } from "./store";
import { villainExamples } from "./data/villains";
import { schemeExamples } from "./data/schemes";

const mainInitialState = {
  villains: [
    { name: "Gargamel", power: "Magic", level: 1 },
    ...villainExamples,
  ],
  schemes: [{ name: "Kidnap Smurfs" }, ...schemeExamples],
};

const store = createMainStore(mainInitialState);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
