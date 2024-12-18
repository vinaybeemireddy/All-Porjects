import React from "react";
import { useSelector } from "react-redux";

const CartItemList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItem);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => {
        return <h1>{item.cartID}</h1>;
      })}
    </div>
  );
};

export default CartItemList;
