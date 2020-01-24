import React from "react";
import Test from "./js/components/Test";
import { Provider } from "react-redux";
import store from "./js/store/index";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Working!!!</h1>
      <Provider store={store}>
        <Test />
      </Provider>
    </div>
  );
}

export default App;
