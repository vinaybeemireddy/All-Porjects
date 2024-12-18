import React, { useState } from "react";
import formatePrice from "./formatePrice";

const FormRange = ({ label, name, size }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span>{label}</span>
        <span>{formatePrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span>0</span>
        <span>Max: {maxPrice}</span>
      </div>
    </div>
  );
};
export default FormRange;
