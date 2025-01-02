import React from "react";
import { LuUpload } from "react-icons/lu";

const ExportButton = ({ onClick }) => {
  return (
    <button className="border rounded-md text-sm flex space-x-2 items-center h-10 px-2 hover:border-lilac hover:text-lilac" onClick={onClick}>
      <LuUpload /><span>Export to CV</span>
    </button>
  );
};

export default ExportButton;
