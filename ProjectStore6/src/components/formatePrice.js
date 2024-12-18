import React from "react";

const formatePrice = (price) => {
  const IndiaAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
  return IndiaAmount;
};

export default formatePrice;
