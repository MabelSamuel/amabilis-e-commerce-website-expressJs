import React from "react";

import DashboardTitle from "@/components/admin/ui/DashboardTitle";
import ExportFilterLayoutCard from "@/components/admin/ui/ExportFilterLayoutCard";
import ExportButton from "@/components/admin/ui/ExportButton";
import Button from "@/components/admin/ui/Button";
import Input from "@/components/admin/ui/Input";
import SelectOption from "@/components/admin/ui/SelectOption";

import { GoPlus } from "react-icons/go";

import AddProductModal from "@/components/admin/AddProductModal";

import { useDashboardModal } from "@/hooks/useDashboardModal";
import { crochetClothingCategories, crochetPrice } from "@/lib/dashboard/catalogue";

const Catalogue = () => {
  const { isShowDashboardModal, handleDashboardModal, closeDashboardModal } =
    useDashboardModal();

  return (
    <>
      <section className="space-y-6">
        <DashboardTitle title="Catalogue" />
        <ExportFilterLayoutCard className="justify-between">
          <ExportButton />
          <Button
            bgColor="bg-green-500"
            className=" w-auto text-white px-3 flex items-center space-x-2"
            onClick={handleDashboardModal}
          >
            <GoPlus />
            <p>Add product</p>
          </Button>
        </ExportFilterLayoutCard>
        <form
          action=""
          className="bg-white rounded-md px-4 h-24 flex items-center space-x-4"
        >
          <Input placeholder="Search product" className="basis-1/4" />
          <SelectOption
            className="basis-1/4"
            name="category"
            options={crochetClothingCategories}
          />
          <SelectOption
            className="basis-1/4"
            name="price"
            options={crochetPrice}
          />
          <div className="flex basis-1/4 space-x-3 ">
            <Button bgColor="bg-lilac" text="Filter" className="text-white" />
            <Button bgColor="bg-slate-300" text="Reset" />
          </div>
        </form>
      </section>
      {isShowDashboardModal && (
        <AddProductModal closeDashboardModal={closeDashboardModal} />
      )}
    </>
  );
};

export default Catalogue;
