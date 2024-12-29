import React from "react";

const Loader = ({ size = "md" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`
        animate-spin rounded-full border-t-2 border-b-2 border-black
        ${sizes[size]}
      `}
      />
    </div>
  );
};

export default Loader;
