import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productReducer/action";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts);
  }, []);

  return (
    <DIV>
      {products &&
        products.map((element) => {
          return <ProductCard key={element.id} {...element} />;
        })}
    </DIV>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
`;
export default ProductList;
