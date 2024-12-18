import React from "react";
import Admin from "./pages/Admin";
import MainRoutes from "./pages/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
