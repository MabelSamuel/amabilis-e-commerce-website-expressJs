import React from "react";

const SelectOption = ({ options, name, className }) => {
  return (
    <select
      name={name}
      className={` h-12 border border-slate-300 rounded-md px-4 outline-none bg-slate-200 focus:bg-inherit ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default SelectOption;
