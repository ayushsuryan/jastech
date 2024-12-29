import React from "react";

const Card = ({ children, className = "", hover = false }) => {
  return (
    <div
      className={`
      bg-white rounded-lg shadow-md p-6
      ${
        hover
          ? "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          : ""
      }
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default Card;
