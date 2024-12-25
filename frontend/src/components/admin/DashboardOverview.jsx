import React from "react";
import DashboardTitle from "./DashboardTitle";
import { LuPackage } from "react-icons/lu";
import OverviewCard from "./OverviewCard";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoCardOutline } from "react-icons/io5";

const DashboardOverview = () => {
  const cardItems = [
    { icon: <LuPackage size={50} />, label: "Today Orders", price: 5000.81 },
    {
      icon: <LuPackage size={50} />,
      label: "Yesterday Orders",
      price: 5050.18,
    },
    {
      icon: <HiOutlineShoppingCart size={50} />,
      label: "This Month",
      price: 15000.81,
    },
    { icon: <IoCardOutline size={50} />, label: "Last Month", price: 15080.81 },
    {
      icon: <IoCardOutline size={50} />,
      label: "All-time Sales",
      price: 589000.81,
    },
  ];
  return (
    <div>
      <DashboardTitle title="Dashboard Overview" />
      <div className="flex justify-between">
        {cardItems.map((item, index) => (
          <OverviewCard
            key={index}
            icon={item.icon}
            cardTitle={item.label}
            cardAmount={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
