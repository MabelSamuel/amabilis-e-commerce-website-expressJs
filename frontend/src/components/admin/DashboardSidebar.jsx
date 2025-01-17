import { NavLink, useNavigate } from "react-router-dom";
import { v4 } from "uuid"

import Title from "../company-name/Title";
import { menuItems } from "../../lib/dashboard/sidebar";
import { IoLogOutOutline } from "react-icons/io5";

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/admin/login");
  };
  return (
    <div className="bg-lilac h-full px-4 py-4 md:w-2/5">
      <div className="text-center">
        <Title />
      </div>
      <nav className="mt-6 text-white space-y-3 *:py-2 *:px-4">
        {menuItems.map((item) => (
          <NavLink
            key={v4()}
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
