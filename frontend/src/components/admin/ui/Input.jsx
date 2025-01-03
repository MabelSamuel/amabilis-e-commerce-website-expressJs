import React from "react";

const Input = ({ placeholder, className='', onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full h-10 border border-slate-300 rounded-md px-4 outline-none bg-slate-200 ${className}`}
      onChange={onChange}
    />
  );
};

export default Input;
