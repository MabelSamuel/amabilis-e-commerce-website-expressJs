import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/admin/DashboardHeader";
import DashboardSidebar from "../components/admin/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <section className="flex">
      <div className="w-1/5 h-screen">
        <DashboardSidebar />
      </div>
      <div className="w-4/5">
        <DashboardHeader />
        <main>
          <Outlet/>
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
