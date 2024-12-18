import React, { useEffect, useRef } from "react";

const useDebounce = (callbackFn, delay) => {
  const id = useRef();

  useEffect(() => {
    id.current && clearTimeout(id.current);
    id.current = setTimeout(() => {
      callbackFn();
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay, callbackFn]);
};

export default useDebounce;
