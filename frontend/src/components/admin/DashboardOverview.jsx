import React from "react";

import DashboardTitle from "./ui/DashboardTitle";
import OverviewCard from "./ui/OverviewCard";
import OverviewRectangleCard from "./ui/OverviewRectangleCard";
import Table from "../table/Table";

import { columns, data } from "../../lib/dashboard/dashboard-overview";

const DashboardOverview = () => {
  return (
    <div className="space-y-10">
      <DashboardTitle title="Dashboard Overview" />
      <div className="flex space-x-4 overflow-x-auto">
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
      <div className="flex space-x-4 overflow-x-auto">
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
      <div className="space-y-4">
        <h4 className="font-medium text-lg">Recent order</h4>
        <div className="overflow-x-auto">
          <Table columns={columns} data={data}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
