import React from "react";

const ShekelSymbol = ({ size }) => {
  return (
    <span
      className="d-flex justify-content-center align-items-center"
      style={{ fontSize: `${size}px` }}
    >
      &#8362;
    </span>
  );
};

export default ShekelSymbol;
