import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Timer1 from "./Timer1";
import Timer2 from "./Timer2";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [num, setNum] = useState(0);
  useDebounce(() => {
    console.log("making an api");
  }, 1000);

  const handleScrollEvent = () => {
    // let id;
    // return () => {
    //   id && clearTimeout(id);
    //   id = setTimeout(() => {
    //     setNum((prev) => prev + 1);
    //   }, 1000);
    // };
    setNum((prev) => prev + 1);
  };
  // const debouncingFunction = handleScrollEvent();
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  });
  return (
    <>
      <div className="App">
        <div style={{ position: "sticky", top: "200px" }}>
          <h1>scroll text :{num}</h1>
        </div>
      </div>
      {/* <Timer1 />
      <Timer2 /> */}
    </>
  );
}

export default App;
