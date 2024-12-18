import { useEffect, useState } from "react";

const useTimer = (delay) => {
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTimer(true);
    }, delay);
  }, []);

  return showTimer;
};

export default useTimer;
