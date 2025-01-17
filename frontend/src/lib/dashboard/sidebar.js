import { LuLayoutDashboard } from "react-icons/lu";
import { GrCatalog } from "react-icons/gr";
import { IoPeopleOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosStarHalf } from "react-icons/io";
import { MdStorefront } from "react-icons/md";

export const menuItems = [
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
