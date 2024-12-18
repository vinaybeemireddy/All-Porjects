import React, { useEffect, useRef } from "react";

const Refs = () => {
  const ref = useRef(1);
  const inputRef = useRef();

  console.log(ref.current);
  const handleIncrease = () => {
    ref.current = ref.current + 1;
    console.log(ref.current);
  };
  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  });
  return (
    <div>
      <input type="text" ref={inputRef} />
      <h1>{ref.current}</h1>
      <button onClick={handleIncrease}>increase</button>
    </div>
  );
};

export default Refs;
