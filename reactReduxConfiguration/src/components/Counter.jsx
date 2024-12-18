import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFunction, subFunction } from "../redux/counter/action";

const Counter = () => {
  const counter = useSelector((store) => store.counterReducer.counter);
  const dispatch = useDispatch();

  // console.log("data", counter);

  const handleIncrease = () => {
    dispatch(addFunction(1));
  };
  const handleDecrease = () => {
    dispatch(subFunction(1));
  };

  // console.log("counter component is re-rending ");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>incr</button>
      <button onClick={handleDecrease}>decrease</button>
    </div>
  );
};

export default Counter;
