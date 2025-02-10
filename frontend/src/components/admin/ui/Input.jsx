import React, { Fragment, useState } from "react";
import { MdOutlineClear } from "react-icons/md";

const Input = ({ placeholder, className = "" }) => {
  const [isVisible, setIsVisble] = useState(false);
  const handleVisibility = (e) => {
    if (e.target.value === "") {
      setIsVisble(false);
    } else {
      setIsVisble(true);
    }
  };

  const handleClearInput = (e) =>{
    e.preventDefault();
  }

  return (
    <div className=" relative">
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full h-12 border border-slate-300 rounded-md px-4 outline-none bg-slate-200 ${className}`}
        onChange={handleVisibility}
      />
      {isVisible && (
        <button className="absolute right-4 top-1/4"
         onClick={handleClearInput}>
          <MdOutlineClear />
        </button>
      )}
    </div>
  );
};

export default Input;
