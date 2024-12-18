import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ErrorElement from "../components/ErrorElement";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <nav>
        <span className="text-3xl text-primary">story</span>
      </nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
