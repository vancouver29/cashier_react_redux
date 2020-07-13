import React, { Component } from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import "./style.css";

import cartReducer from "./reducers/CartReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
