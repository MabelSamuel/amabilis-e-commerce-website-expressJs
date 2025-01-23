import React, { useState } from "react";

import { MdOutlineClear } from "react-icons/md";

import DashboardTitle from "@/components/admin/ui/DashboardTitle";
import Button from "@/components/admin/ui/Button";
import ExportFilterLayoutCard from "@/components/admin/ui/ExportFilterLayoutCard";
import ExportButton from "@/components/admin/ui/ExportButton";
import Input from "@/components/admin/ui/Input";

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
        <ExportButton />
      </ExportFilterLayoutCard>
      <form className="bg-white rounded-md px-4 h-24 flex items-center space-x-8">
        <div className="w-1/2 relative">
          <Input
            placeholder="Search by name/email"
            onChange={handleVisibility}
          />
          {isVisible && (
            <button className="absolute right-4 top-1/4">
              <MdOutlineClear />
            </button>
          )}
        </div>
        <div className="w-1/2 flex gap-x-4">
          <Button bgColor="bg-lilac" text="Filter" className="text-white" />
          <Button bgColor="bg-slate-300" text="Reset" />
        </div>
      </form>
    </section>
  );
};

export default Customers;
