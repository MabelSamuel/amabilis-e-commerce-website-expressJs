import { Outlet } from "react-router-dom";
import { useState } from "react";

import DashboardHeader from "@/components/admin/DashboardHeader";
import DashboardSidebar from "@/components/admin/DashboardSidebar";

const DashboardLayout = () => {
  const [ isSidebarVisible, setIsSidebarVisible ] = useState(false);

  const toggleSidebarVisibility = () =>{
    setIsSidebarVisible(!isSidebarVisible)
  }

  const stopPropagation =(e)=>{
    e.stopPropagation()
  }

  return (
    <section className="flex">
      <div className={`w-[18%] h-screen sticky top-0 md:translate-x-0 sm:translate-x-0 ${ isSidebarVisible ? 'md:translate-x-0 md:fixed md:left-0 md:h-screen  md:transition-transform md:duration-300 md:z-[100] md:w-full md:bg-black md:bg-opacity-75 sm:translate-x-0 sm:fixed sm:left-0 sm:h-screen  sm:transition-transform sm:duration-300 sm:z-[100] sm:w-full sm:bg-black sm:bg-opacity-75' : 'md:hidden sm:hidden' }`} onClick={()=> setIsSidebarVisible(false)}>
        <DashboardSidebar stopPropagation={stopPropagation} />
      </div>
      <div className="w-[82%] md:w-full sm:w-full">
        <DashboardHeader toggleSidebarVisibility={toggleSidebarVisibility} />
        <main className="bg-slate-100 px-6 py-6" >
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
