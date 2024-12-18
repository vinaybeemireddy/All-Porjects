import React from "react";
import { customFetch } from "../utils";
import ProductContainer from "../components/ProductContainer";
import ProductsList from "../components/ProductsList";
import Filters from "../components/Filters";

const url = "/products";
export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <div>
      <Filters />
      <ProductContainer />
    </div>
  );
};

export default Products;

//filters
//product container.
//pagination container
