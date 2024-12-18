import React, { useReducer } from "react";
import { reducerFunction } from "./reducerFunction";

const Reducer = () => {
  const [data, dispatch] = useReducer(reducerFunction, 1);

  const handleIncrease = () => {
    dispatch({ type: "INCREASE", payload: 1 });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREASE", payload: -1 });
  };
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </div>
  );
};

export default Reducer;
