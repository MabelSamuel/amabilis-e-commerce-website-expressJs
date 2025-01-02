import React from "react";

import DashboardTitle from "./ui/DashboardTitle";
import OverviewCard from "./ui/OverviewCard";
import OverviewRectangleCard from "./ui/OverviewRectangleCard";
import Table from "../table/Table";

import { LuPackage } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoCardOutline } from "react-icons/io5";
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
      bgColor: "bg-red-200",
      textColor: "text-red-500",
      icon: <HiOutlineShoppingCart size={20} />,
      title: "Total Order",
      count: 518,
    },
    {
      bgColor: "bg-pink-200",
      textColor: "text-red-400",
      icon: <FaRotate size={20} />,
      title: "Orders Pending",
      count: 108,
    },
    {
      bgColor: "bg-emerald-200",
      textColor: "text-emerald-500",
      icon: <BsTruck size={20} />,
      title: "Orders Processing",
      count: 518,
    },
    {
      bgColor: "bg-emerald-200",
      textColor: "text-emerald-500",
      icon: <GrStatusGood size={20} />,
      title: "Orders Delivered",
      count: 490,
    },
  ];

  const columns = [
    { header: 'Order ID', accessor: 'id' },
    { header: 'Order Date', accessor: 'orderDate' },
    { header: 'Customer Name', accessor: 'customerName' },
    { header: 'Order Cost', accessor: 'orderCost' },
    { header: 'Status', accessor: 'status' },
    { header: 'Email', accessor: 'email' },
    { 
      header: 'Actions', 
      accessor: 'id', 
      render: (id) => <select className="">
        <option value="pending">Pending</option>
        <option value="delivered">Delivered</option>
        <option value="processing">Processing</option>
        <option value="cancel">Cancel</option>
      </select> 
    },
  ];

  const data = [
    { id: 101, orderDate: '2024-01-01', customerName: 'Alice Johnson', orderCost: '$150.00', status: 'Pending', email: 'alice.johnson@example.com' },
    { id: 102, orderDate: '2024-01-02', customerName: 'Bob Smith', orderCost: '$200.00', status: 'Delivered', email: 'bob.smith@example.com' },
    { id: 103, orderDate: '2024-01-03', customerName: 'Charlie Brown', orderCost: '$75.00', status: 'Processing', email: 'charlie.brown@example.com' },
    { id: 104, orderDate: '2024-01-04', customerName: 'Diana Prince', orderCost: '$300.00', status: 'Delivered', email: 'diana.prince@example.com' },
    { id: 105, orderDate: '2024-01-05', customerName: 'Ethan Hunt', orderCost: '$500.00', status: 'Canceled', email: 'ethan.hunt@example.com' },
    { id: 106, orderDate: '2024-01-06', customerName: 'Fiona Gallagher', orderCost: '$220.00', status: 'Pending', email: 'fiona.g@example.com' },
    { id: 107, orderDate: '2024-01-07', customerName: 'George Michaels', orderCost: '$180.00', status: 'Processing', email: 'george.m@example.com' },
    { id: 108, orderDate: '2024-01-08', customerName: 'Hannah Montana', orderCost: '$450.00', status: 'Delivered', email: 'hannah.m@example.com' },
    { id: 109, orderDate: '2024-01-09', customerName: 'Ian Somerhalder', orderCost: '$95.00', status: 'Pending', email: 'ian.s@example.com' },
    { id: 110, orderDate: '2024-01-10', customerName: 'Jack Sparrow', orderCost: '$350.00', status: 'Delivered', email: 'jack.s@example.com' },
    { id: 111, orderDate: '2024-01-11', customerName: 'Karen Daniels', orderCost: '$250.00', status: 'Canceled', email: 'karen.d@example.com' },
    { id: 112, orderDate: '2024-01-12', customerName: 'Liam Neeson', orderCost: '$400.00', status: 'Delivered', email: 'liam.n@example.com' },
    { id: 113, orderDate: '2024-01-13', customerName: 'Megan Fox', orderCost: '$130.00', status: 'Processing', email: 'megan.f@example.com' },
    { id: 114, orderDate: '2024-01-14', customerName: 'Nathan Drake', orderCost: '$600.00', status: 'Pending', email: 'nathan.d@example.com' },
    { id: 115, orderDate: '2024-01-15', customerName: 'Olivia Pope', orderCost: '$280.00', status: 'Delivered', email: 'olivia.p@example.com' },
    { id: 116, orderDate: '2024-01-16', customerName: 'Peter Parker', orderCost: '$120.00', status: 'Processing', email: 'peter.p@example.com' },
    { id: 117, orderDate: '2024-01-17', customerName: 'Quinn Fabray', orderCost: '$75.00', status: 'Pending', email: 'quinn.f@example.com' },
    { id: 118, orderDate: '2024-01-18', customerName: 'Rachel Green', orderCost: '$500.00', status: 'Delivered', email: 'rachel.g@example.com' },
    { id: 119, orderDate: '2024-01-19', customerName: 'Steve Rogers', orderCost: '$290.00', status: 'Canceled', email: 'steve.r@example.com' },
    { id: 120, orderDate: '2024-01-20', customerName: 'Tony Stark', orderCost: '$1,000.00', status: 'Delivered', email: 'tony.s@example.com' },
  ];
  

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
