import React from "react";
import ReactDOM from "react-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import App from "./App";

library.add(fas, faBars, faX);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
