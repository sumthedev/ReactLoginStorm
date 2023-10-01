import React from "react";
import ReactDOM from "react-dom";
import authReducer from "./component/redux/actions/reducers/authReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";

import App from "./App";
const store = createStore(authReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
