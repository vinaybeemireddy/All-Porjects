import React, { useEffect, useState } from "react";
import useTimer from "./useTimer";

const Timer1 = () => {
  const [showTimer] = useTimer(2000);
  // const [showTimer, setShowTimer] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowTimer(true);
  //   }, delay);
  // }, []);

  return <>{showTimer && <div>Timer1</div>}</>;
};

export default Timer1;
