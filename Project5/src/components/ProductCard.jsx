import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteProduct, getProducts } from "../redux/productReducer/action";
import { Link } from "react-router-dom";

const ProductCard = ({ id, brand, category, gender, image, name, price }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // dispatch(deleteProduct(id)).then(() => {
    //   dispatch(getProducts({}));
    // });
    dispatch(deleteProduct(id));
  };
  return (
    <DIV>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <h3>Price: {price}</h3>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <p>Gender: {gender}</p>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
      <button onClick={handleDelete}>Delete</button>
    </DIV>
  );
};

const DIV = styled.div`
  border: 1px solid gray;
  padding: 10px;
  img {
    width: 100%;
  }
`;

export default ProductCard;
