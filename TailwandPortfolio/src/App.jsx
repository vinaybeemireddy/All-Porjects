import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Title />
      <Skills />
      <About />
      <Projects />
    </div>
  );
};

export default App;
