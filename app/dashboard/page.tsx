import DashboardTabs from "./components/DashboardTabs/DashboardTabs";



function DashboardPage() {
  return (
    <div className="w-4/5 flex justify-between mx-auto py-10">
      <DashboardTabs />
    </div>
  )
}

export default DashboardPage;