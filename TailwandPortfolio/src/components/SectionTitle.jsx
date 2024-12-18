import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b pb-5 border-gray-200">
      <h2 className="text-3xl font-medium capitalize tracking-wider">{text}</h2>
    </div>
  );
};

export default SectionTitle;
