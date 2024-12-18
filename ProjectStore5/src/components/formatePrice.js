import React from "react";

const formatePrice = (price) => {
  const IndiaAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format((price / 100).toFixed(2));
  return IndiaAmount;
};

export default formatePrice;
