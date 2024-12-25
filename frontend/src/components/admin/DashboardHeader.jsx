import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import { useState } from "react";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleDropdown = (dropdownName) => {
    setIsOpen((prev) => (prev === dropdownName ? null : dropdownName));
  };
  return (
    <div className="flex items-center justify-between h-16 py-6 px-6 border-b shadow-sm sticky top-0 z-[51]">
      <div className="">
        <GiHamburgerMenu className="hidden md:block sm:block" size={20} />
      </div>
      <ul className="flex items-center space-x-6 cursor-pointer">
        <li>
          <FaRegBell size={20} />
        </li>
        <li>
          <span
            onClick={() => handleDropdown("profile")}
            className="flex items-center justify-center w-6 h-6 border-black border text-black rounded-full relative "
          >
            A
          </span>
          {isOpen === "profile" && (
            <div className="absolute bg-white shadow-md pt-2 px-3 pb-3 text-left w-32 z-50 transition-all duration-300 ease-in flex items-center top-[4rem] right-0 sm:top-[4.2rem] sm:right-0">
              <ul className="text-sm ml-2 my-2 space-y-2 *:flex *:space-x-1 *:items-center * ">
                <li className="hover:text-lilac"><IoSettingsOutline/> <span>Edit Profile</span></li>
                <li className="hover:text-lilac"><IoLogOutOutline/><span>Logout</span></li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default DashboardHeader;
