import React from "react";

const Button = ({ children, isLoading, classes }) => {
  return (
    <button className={` ${classes} ${isLoading && "opacity-50 cursor-not-allowed bg-lilac"} `} disabled={isLoading}>
      {isLoading ? (
        <span>
          Loading
          {/* <svg className="size-4 animate-spin ml-2" viewBox="0 0 24 24"></svg> */}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
