import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleAdd() {
    setCount((prev) => prev + 1);
  }
  const handleReduce = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={handleAdd} data-testid="add" className="button">
        Add
      </button>
      <button onClick={handleReduce} className="button">
        Reduce
      </button>
    </div>
  );
};

export default Counter;
