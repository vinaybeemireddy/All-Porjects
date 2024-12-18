import React from "react";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";
import styled from "styled-components";

const HomePage = () => {
  return (
    <DIV>
      <SideBar className="sidebar" />
      <ProductList className="productList" />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  .sidebar {
    width: 15%;
  }
  .productList {
    width: 85%;
  }
  gap: 10px;
`;
export default HomePage;
