import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvide } from "./StateProvider";
import reducer, { initalState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvide initalState={initalState} reducer={reducer}>
      <App />
    </StateProvide>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
