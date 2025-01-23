import { Outlet } from "react-router-dom";
import { useState } from "react";

import DashboardHeader from "@/components/admin/DashboardHeader";
import DashboardSidebar from "@/components/admin/DashboardSidebar";

const DashboardLayout = () => {
  const [ isSidebarVisible, setIsSidebarVisible ] = useState(false);

  const toggleSidebarVisibility = () =>{
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <section className="flex">
      <div className={`w-[18%] h-screen sticky top-0 md:hidden sm:hidden ${ isSidebarVisible ? 'translate-x-full block transition-transform duration-300' : '' }`}>
        <DashboardSidebar />
      </div>
      <div className="w-[82%] md:w-full sm:w-full">
        <DashboardHeader toggleSidebarVisibility={toggleSidebarVisibility} />
        <main className="bg-slate-100 px-6 py-6">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
