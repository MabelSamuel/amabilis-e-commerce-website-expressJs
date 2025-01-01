import { Outlet } from "react-router-dom";

import DashboardHeader from "../components/admin/DashboardHeader";
import DashboardSidebar from "../components/admin/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <section className="flex">
      <div className="w-[18%] h-screen sticky top-0">
        <DashboardSidebar />
      </div>
      <div className="w-[82%]">
        <DashboardHeader />
        <main className="bg-slate-100 px-6 py-6">
          <Outlet/>
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
