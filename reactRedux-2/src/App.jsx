import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import Sample from "./Sample";
import { store } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addFunction, subFunction } from "./action";

function App() {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  console.log("data", counter);

  const handleIncrease = () => {
    dispatch(addFunction(1));
  };
  const handleDecrease = () => {
    dispatch(subFunction(1));
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>incr</button>
      <button onClick={handleDecrease}>decrease</button>
    </div>
  );
}

export default App;
