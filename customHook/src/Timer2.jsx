import React, { useEffect, useState } from "react";
import useTimer from "./useTimer";

const Timer2 = () => {
  const showTimer = useTimer(3000);
  return <>{showTimer && <div>Timer2</div>}</>;
};

export default Timer2;
