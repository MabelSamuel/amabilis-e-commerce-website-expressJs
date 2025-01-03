import React from "react";

import DashboardTitle from "./ui/DashboardTitle";
import ExportFilterLayoutCard from "./ui/ExportFilterLayoutCard";
import ExportButton from "./ui/ExportButton";
import Button from "./ui/Button";
import Input from "./ui/Input";
import SelectOption from "./ui/SelectOption";

import { GoPlus } from "react-icons/go";

const Catalogue = () => {
  const crochetClothingCategories = [
    { value: "", label: "Category" },
    { value: "tops", label: "Tops" },
    { value: "dresses", label: "Dresses" },
    { value: "cardigans", label: "Cardigans" },
    { value: "skirts", label: "Skirts" },
    { value: "shawls", label: "Shawls" },
    { value: "scarves", label: "Scarves" },
    { value: "hats", label: "Hats" },
    { value: "gloves", label: "Gloves" },
    { value: "sweaters", label: "Sweaters" },
    { value: "rompers", label: "Rompers" },
    { value: "baby_clothing", label: "Baby Clothing" },
    { value: "swimwear", label: "Swimwear" },
    { value: "vests", label: "Vests" },
    { value: "ponchos", label: "Ponchos" },
    { value: "headbands", label: "Headbands" },
  ];

  const crochetPrice = [
    { value: "", label: "Price" },
    { value: "lowToHigh", label: "Low to High" },
    { value: "highToLow", label: "High to Low" },
  ];

  return (
    <section className="space-y-6">
      <DashboardTitle title="Catalogue" />
      <ExportFilterLayoutCard className="justify-between">
        <ExportButton />
        <Button
          bgColor="bg-green-500"
          className=" w-auto text-white px-3 flex items-center space-x-2"
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
  );
};

export default Catalogue;
