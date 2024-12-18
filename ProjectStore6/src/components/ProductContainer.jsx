import React, { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

const ProductContainer = () => {
  const { meta } = useLoaderData();

  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState("grid");

  return (
    <>
      {/* header */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button onClick={() => setLayout("grid")}>
            <BsFillGridFill />
          </button>
          <button onClick={() => setLayout("list")}>
            <BsList />
          </button>
        </div>
      </div>
      {/* product */}
      <div>
        {totalProducts === 0 ? (
          <h5>sorry, no products match your search</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductContainer;
