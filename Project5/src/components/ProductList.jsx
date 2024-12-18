import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productReducer/action";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.getAll("gender"));
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  // console.log(products);
  const location = useLocation();
  // console.log(location);

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      gender: searchParams.getAll("gender"),
      _sort: searchParams.get("order") && "price", //undefined
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);

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
