import React from "react";

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control">
      <div className="label" htmlFor={name}>
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

export default FormInput;
