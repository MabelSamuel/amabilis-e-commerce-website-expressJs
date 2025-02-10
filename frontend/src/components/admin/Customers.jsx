import React from "react";

import DashboardTitle from "@/components/admin/ui/DashboardTitle";
import Button from "@/components/admin/ui/Button";
import ExportFilterLayoutCard from "@/components/admin/ui/ExportFilterLayoutCard";
import ExportButton from "@/components/admin/ui/ExportButton";
import Input from "@/components/admin/ui/Input";

const Customers = () => {
  return (
    <section className="space-y-6">
      <DashboardTitle title="Customers" />
      <ExportFilterLayoutCard>
        <ExportButton />
      </ExportFilterLayoutCard>
      <form className="bg-white rounded-md px-4 h-24 flex items-center space-x-8">
        <div className="w-1/2">
          <Input
            placeholder="Search by name/email"
          />
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
