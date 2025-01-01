import React, { useState } from "react";
import DashboardTitle from "./DashboardTitle";
import { LuUpload } from "react-icons/lu";

const Customers = () => {
  return (
    <div className="space-y-10">
      <DashboardTitle title="Customers" />
      <div className="bg-white rounded-md py-8 px-4">
        <button className="border rounded-md text-sm flex space-x-2 items-center h-10 px-2 hover:border-lilac hover:text-lilac">
          <LuUpload /> <span>Export to CV</span>
        </button>
      </div>
      <div className="bg-white rounded-md py-8 px-4">
        
      </div>
    </div>
  );
};

export default Customers;
