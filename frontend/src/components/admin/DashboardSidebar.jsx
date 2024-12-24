import React, { useState } from "react";
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
    { label: "Dashboard", icon: <LuLayoutDashboard size="22" />, path: "" },
    {
      label: "Catalogue",
      icon: <GrCatalog size="22" />,
      children: [
        { label: "Product list", path: "" },
        { label: "Add Product", path: "" },
        { label: "Product details", path: "" },
      ],
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

  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const onLogout = () =>{
    navigate("/admin/dashboard")
  }
  return (
    <div className="bg-lilac h-full px-7 py-4">
      <Title />
      <nav className="mt-8 text-white space-y-7">
        {menuItems.map((item, index) => (
          <div key={index}>
            {item.children ? (
              <div
                onClick={() => toggleMenu(index)}
                className="flex space-x-4 items-center cursor-pointer"
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ) : (
              <NavLink to={item.path} className="flex space-x-4 items-center">
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            )}
            {item.children && openMenu === index && (
              <div className="ml-8 mt-2 space-y-2">
                {item.children.map((child, childIndex) => (
                  <NavLink key={childIndex} to={child.path} className="block">
                    - {child.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
        <button onClick={onLogout} className="flex space-x-4 items-center ">
          <IoLogOutOutline size="22" /> <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
