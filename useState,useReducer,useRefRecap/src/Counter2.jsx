import React, { useState } from "react";

const Counter2 = ({ value }) => {
  const [data, setData] = useState(() => {
    if (value % 2 == 0) {
      return value;
    }
    return 2;
  });

  const handleIncrease = () => {
    // setData(data+1)
    setData((prev) => {
      return prev + 1;
    });
  };
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={handleIncrease}>increase</button>
    </div>
  );
};

export default Counter2;
