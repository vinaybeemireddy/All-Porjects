import React from "react";
import { useSelector } from "react-redux";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* subtotal */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>SubTotal</span>
          <span className="font-medium">{cartTotal}</span>
        </p>
        {/* shipping */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span className="font-medium">{shipping}</span>
        </p>
        {/* tax */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Tax</span>
          <span className="font-medium">{tax}</span>
        </p>
        {/* total */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span className="font-bold">OrderTotal</span>
          <span className="font-bold">{orderTotal}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
