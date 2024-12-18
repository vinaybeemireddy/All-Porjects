import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import CartItemList from "../components/CartItemList";

const Cart = () => {
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    return <SectionTitle text="your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div>
        <div>
          <CartItemList />
        </div>

        <div>CartTotal</div>
        {user ? (
          <Link to="/checkout" className="btn btn-primary btn-block mt-8">
            Proceed to checkout
          </Link>
        ) : (
          <Link to="/login" className="btn btn-primary btn-block mt-8">
            please login
          </Link>
        )}
      </div>
    </>
  );
};

export default Cart;
