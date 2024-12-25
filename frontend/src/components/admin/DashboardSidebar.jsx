import { useState } from "react";
import Title from "../company-name/Title";
import { LuLayoutDashboard } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { GrCatalog } from "react-icons/gr";
import {
  IoPeopleOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosStarHalf } from "react-icons/io";
import { MdStorefront } from "react-icons/md";

const DashboardSidebar = () => {
  const menuItems = [
    { label: "Dashboard", icon: <LuLayoutDashboard size="22" />, path: "overview" },
    {
      label: "Catalogue",
      icon: <GrCatalog size="22" />,
      path: "catalogue",
    },
    {
      label: "Customers",
      icon: <IoPeopleOutline size="22" />,
      path: "customers",
    },
    {
      label: "Orders",
      icon: <HiOutlineShoppingCart size="22" />,
      path: "orders",
    },
    { label: "Reviews", icon: <IoIosStarHalf size="22" />, path: "reviews" },
    {
      label: "Settings",
      icon: <IoSettingsOutline size="22" />,
      path: "settings",
    },
    {
      label: "Online store",
      icon: <MdStorefront size="22" />,
      path: "online-store",
    },
  ];

  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/admin/login");
  };
  return (
    <div className="bg-lilac h-full px-4 py-4">
      <div className="text-center">
        <Title />
      </div>
      <nav className="mt-6 text-white space-y-3 *:py-2 *:px-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex space-x-4 items-center ${
                isActive ? "border-white bg-white text-black rounded-md" : ""
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
        <button onClick={onLogout} className="flex space-x-4 items-center bg-red-500 rounded-md w-full ">
          <IoLogOutOutline size="22" /> <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
