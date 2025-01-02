import React, { useState } from "react";

import { MdOutlineClear } from "react-icons/md";

import DashboardTitle from "./ui/DashboardTitle";
import Button from "./ui/Button";
import ExportFilterLayoutCard from "./ui/ExportFilterLayoutCard";
import ExportButton from "./ui/ExportButton";

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
    <section className="space-y-6">
      <DashboardTitle title="Customers" />
      <ExportFilterLayoutCard>
        <ExportButton/>
      </ExportFilterLayoutCard>
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
    </section>
  );
};

export default Customers;
