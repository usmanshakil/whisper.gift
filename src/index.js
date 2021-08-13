import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { store } from './store/storeConfig/store.js'
import State from "./context/State";
Modal.setAppElement("#root");

ReactDOM.render(
  <Provider store={store}>
    <State>
      <App />
    </State>
  </Provider>,
  document.getElementById("root")
);
