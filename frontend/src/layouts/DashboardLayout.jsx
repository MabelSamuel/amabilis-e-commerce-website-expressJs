import { Outlet } from "react-router-dom";

import DashboardHeader from "../components/admin/DashboardHeader";
import DashboardSidebar from "../components/admin/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <section className="flex">
      <div className="w-1/5 h-screen sticky top-0">
        <DashboardSidebar />
      </div>
      <div className="w-4/5">
        <DashboardHeader />
        <main className="bg-slate-100 px-4 py-6">
          <Outlet/>
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
