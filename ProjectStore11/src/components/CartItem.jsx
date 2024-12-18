import React from "react";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/cartSlice";
import { generateAmountOptions } from "../utils";

const CartItem = ({
  cartID,
  title,
  price,
  image,
  amount,
  company,
  productColor,
}) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  return (
    <article className="mb-12 flex flex-col gap-y-4 sm:flex-row border-b border-base-300 pb-6 last:border-b-0">
      {/* image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* info */}
      <div className="sm: ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className="badge badge-sm"
            style={{ background: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        {/* amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmount}
            className="mt-2 select select-base select-bordered select-xs"
          >
            {generateAmountOptions(5)}
          </select>
        </div>
        {/* remove */}
        <button
          onClick={removeItemFromTheCart}
          className="mt-2 link link-primary link-hover text-sm"
        >
          remove
        </button>
      </div>
      <p className="font-medium sm: ml-auto">{price}</p>
    </article>
  );
};

export default CartItem;
