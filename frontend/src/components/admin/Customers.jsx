import React, { useState } from "react";
import DashboardTitle from "./DashboardTitle";
import { LuUpload } from "react-icons/lu";
import { MdOutlineClear } from "react-icons/md";
import Button from "./Button";

const Customers = () => {
  const [isVisible, setIsVisble] = useState(false);
  const handleVisibility = (e) => {
    if (e.target.value === "") {
      setIsVisble(false);
    } else {
      setIsVisble(true);
    }
  };

  return (
    <div className="space-y-10">
      <DashboardTitle title="Customers" />
      <div className="bg-white rounded-md px-4 h-24 flex items-center">
        <button className="border rounded-md text-sm flex space-x-2 items-center h-10 px-2 hover:border-lilac hover:text-lilac">
          <LuUpload /> <span>Export to CV</span>
        </button>
      </div>
      <form className="bg-white rounded-md px-4 h-24 flex items-center space-x-8">
        <div className="w-1/2 relative">
          <input
            type="text"
            placeholder="Search by name/email"
            className="w-full h-10 border rounded-md px-4 outline-none"
            onChange={handleVisibility}
          />
          {isVisible && (
            <button className="absolute right-4 top-1/4">
              <MdOutlineClear />
            </button>
          )}
        </div>
        <div className="w-1/2 flex gap-x-4">
          <Button bgColor="bg-lilac" text="Filter" className="text-white"/>
          <Button bgColor="bg-slate-300" text="Reset"/>
        </div>
      </form>
    </div>
  );
};

export default Customers;
