import React from "react";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ErrorElement from "../components/ErrorElement";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const navigate = useNavigation();
  const isPageLoading = navigate.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-elements py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
