import React from "react";
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';

import { App } from "./App";
import { GlobalStyle } from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById( 'root' )
);