import React from "react";
import { customFetch } from "../utils";
import { Link, useLoaderData } from "react-router-dom";
import formatePrice from "../components/formatePrice";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  // const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  return (
    <section>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
        </ul>
      </div>

      {/* product */}

      <div>
        {/* image */}
        <img src={image} alt="" />
        {/* product info */}
        <div>
          <h1>{title}</h1>
          <h4>{company}</h4>
          <p>{formatePrice(price)}</p>
          <p>{description}</p>
        </div>
        {/* colors */}

        {/* amount */}
        <div>
          <label htmlFor="">
            <h4>{amount}</h4>
          </label>
        </div>
        {/* cart button */}
        <div>
          <button>Add to bag</button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
