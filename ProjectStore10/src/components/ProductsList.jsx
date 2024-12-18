import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import formatePrice from "./formatePrice";

const ProductsList = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        const { title, image, price, company } = product.attributes;
        const IndianAmount = formatePrice(price);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover;shadow-2xl duration-300 group"
          >
            <img
              src={image}
              alt=""
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h3 className="capitalize text-md text-neutral-content">
                {company}
              </h3>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">
              {IndianAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
