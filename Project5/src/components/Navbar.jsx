import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../redux/productReducer/action";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  let ref = useRef();

  const paramObj = {
    params: {
      q: query,
    },
  };

  useEffect(() => {
    if (ref.current) {
      clearInterval(ref.current);
    }
    ref.current = setTimeout(() => {
      dispatch(getProducts(paramObj));
    }, 1000);
  }, [query]);
  return (
    <DIV>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Link to="/">Home</Link>
      <Link to="/add-product">Admin Page</Link>
      <Link to="/login">Log In</Link>
      <Link to="edit/1">Edit</Link>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin: 10px;
  border-bottom: 1px solid gray;
`;

export default Navbar;
