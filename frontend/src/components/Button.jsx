import React from "react";

const Button = ({ children, isLoading, classes }) => {
  return (
    <button className={`relative ${classes} ${isLoading && "opacity-50 cursor-not-allowed bg-lilac"} `} disabled={isLoading}>
      {isLoading ? (
        <span>
          Loading
          {/* <span className="size-5 aspect-square rounded-full border-4 border-white border-t-transparent animate-spin ml-2"></span> */}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
