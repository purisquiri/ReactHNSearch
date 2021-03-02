import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { addSearch } from "./redux";

function App(props) {
  const news = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>HN Search {news}</h1>
      <button onClick={() => dispatch(addSearch())}>+</button>
    </div>
  );
}

export default App;
