import React from "react";
import DashboardTitle from "./DashboardTitle";
import { LuPackage } from "react-icons/lu";
import OverviewCard from "./OverviewCard";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoCardOutline } from "react-icons/io5";
import OverviewRectangleCard from "./OverviewRectangleCard";
import { BsTruck } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import { FaRotate } from "react-icons/fa6";

const DashboardOverview = () => {
  const cardItems = [
    {
      icon: <LuPackage size={50} />,
      label: "Today Orders",
      price: 5000.81,
      class: "bg-teal-100",
    },
    {
      icon: <LuPackage size={50} />,
      label: "Yesterday Orders",
      price: 5050.18,
      class: "bg-amber-100",
    },
    {
      icon: <HiOutlineShoppingCart size={50} />,
      label: "This Month",
      price: 15000.81,
      class: "bg-blue-100",
    },
    {
      icon: <IoCardOutline size={50} />,
      label: "Last Month",
      price: 15080.81,
      class: "bg-pink-200",
    },
    {
      icon: <IoCardOutline size={50} />,
      label: "All-time Sales",
      price: 589000.81,
      class: "bg-emerald-200",
    },
  ];

  const rectangleItems = [
    {
      bgColor: "red-200",
      textColor: "red-500",
      icon: <HiOutlineShoppingCart size={20} />,
      title: "Total Order",
      count: 518,
    },
    {
      bgColor: "pink-200",
      textColor: "red-400",
      icon: <FaRotate size={20} />,
      title: "Orders Pending",
      count: 108,
    },
    {
      bgColor: "emerald-200",
      textColor: "emerald-500",
      icon: <BsTruck size={20} />,
      title: "Orders Processing",
      count: 518,
    },
    {
      bgColor: "emerald-200",
      textColor: "emerald-500",
      icon: <GrStatusGood size={20} />,
      title: "Orders Delivered",
      count: 490,
    },
  ];
  return (
    <div className="space-y-10">
      <DashboardTitle title="Dashboard Overview" />
      <div className="flex justify-between overflow-x-auto">
        {cardItems.map((item, index) => (
          <OverviewCard
            key={index}
            icon={item.icon}
            cardTitle={item.label}
            cardAmount={item.price}
            className={item.class}
          />
        ))}
      </div>
      <div className="flex justify-between overflow-x-auto">
        { rectangleItems.map((item, index)=> (
          <OverviewRectangleCard 
          key={index}
          icon={item.icon}
          title={item.title}
          count={item.count}
          bgColor={item.bgColor}
          textColor={item.textColor}
          />
        )) }
      </div>
      <div>
        <h4 className="font-medium text-lg">Recent order</h4>
        <table>
          
        </table>
      </div>
    </div>
  );
};

export default DashboardOverview;
