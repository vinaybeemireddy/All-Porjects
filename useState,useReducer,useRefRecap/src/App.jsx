import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./Counter";
import { Route, Router, Routes } from "react-router-dom";
import Auth from "./Auth";
import Counter2 from "./Counter2";
import Reducer from "./Reducer";
import Refs from "./Refs";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {/* {toggle && <Counter/> 

  }
  <button onClick={()=>{setToggle(!toggle)}}>toggle</button> */}
      {/* 
  <Routes>
    <Route path="/" element={<h1>homepage</h1>
    }/>
    <Route path="/counter" element={
      <Auth>

        <Counter/>
      </Auth>
    }/>
    <Route path="*" element={<h1>no page found</h1>}/>
  </Routes> */}
      {/* <Counter2 value={4} /> */}
      {/* <Reducer /> */}
      <Refs />
    </>
  );
}

export default App;
