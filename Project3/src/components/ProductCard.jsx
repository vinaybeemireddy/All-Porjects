import React from "react";
import styled from "styled-components";

const ProductCard = ({ id, brand, category, gender, image, name, price }) => {
  return (
    <DIV>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <h3>Price: {price}</h3>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <p>Gender: {gender}</p>
      <button>Edit</button>
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
