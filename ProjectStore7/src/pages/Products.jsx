import React from "react";
import { customFetch } from "../utils";
import ProductContainer from "../components/ProductContainer";
import ProductsList from "../components/ProductsList";
import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";

const url = "/products";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <div>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;

//filters
//product container.
//pagination container
