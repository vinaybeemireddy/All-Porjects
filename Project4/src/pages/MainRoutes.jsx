import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Admin from "./Admin";
import Login from "./Login";
import PrivateRoute from "../components/PrivateRoute";
import EditPage from "./EditPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/add-product"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoute>
            <EditPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h3>404 page not found</h3>} />
    </Routes>
  );
};

export default MainRoutes;
