import React from "react";

const SelectOption = ({ options }) => {
  return (
    <select
      name=""
      className="basis-1/4 h-10 border border-slate-300 rounded-md px-4 outline-none bg-slate-200"
    >
      <option value="">Category</option>
    </select>
  );
};

export default SelectOption;
