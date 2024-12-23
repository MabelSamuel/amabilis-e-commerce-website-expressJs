import DashboardContent from "./DashboardContent"
import DashboardSidebar from "./DashboardSidebar"

const Dashboard = () => {
  return (
    <section className="flex">
      <DashboardSidebar />
      <DashboardContent />
    </section>
  )
}

export default Dashboard