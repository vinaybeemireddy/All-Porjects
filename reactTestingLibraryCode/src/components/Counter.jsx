import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleAdd() {
    setCount((prev) => prev + 1);
  }
  return (
    <div data-testid="counter">
      {/* <h1 data-testid="value"></h1> */}
      <h2 data-testid="count">Count:{count}</h2>
      <Button children={"add"} color={"red"} size={"small"} func={handleAdd} />
    </div>
  );
};

export default Counter;
