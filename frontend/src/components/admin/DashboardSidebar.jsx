import { NavLink, useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import Title from "@/components/company-name/Title";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrCatalog } from "react-icons/gr";
import {
  IoPeopleOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosStarHalf } from "react-icons/io";
import { MdStorefront } from "react-icons/md";

const DashboardSidebar = ({ stopPropagation }) => {
  const menuItems = [
    {
      label: "Dashboard",
      icon: <LuLayoutDashboard size="22" />,
      path: "overview",
    },
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
    <div className="bg-lilac h-full px-4 py-4 md:w-[20rem] sm:w-[15rem]" onClick={stopPropagation}>
      <div className="px-4">
        <Title />
      </div>
      <nav className="mt-6 text-white space-y-3 *:py-2 *:px-4">
        {menuItems.map((item) => (
          <NavLink
            key={v4()}
            to={item.path}
            className={({ isActive }) =>
              `flex space-x-4 items-center hover:border-white hover:bg-white hover:text-black hover:rounded-md ${
                isActive && "border-white bg-white text-black rounded-md" 
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
        <button
          onClick={onLogout}
          className="flex space-x-4 items-center bg-red-500 rounded-md w-full hover:bg-red-600 "
        >
          <IoLogOutOutline size="22" /> <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
