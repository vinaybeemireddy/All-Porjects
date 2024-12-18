import React from "react";
import SectionTitle from "../components/SectionTitle";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import CheckoutForm from "../components/CheckoutForm";
import CartTotals from "../components/CartTotals";

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartTotal);
  if (cartItems === 0) {
    return <SectionTitle text="Your Cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
