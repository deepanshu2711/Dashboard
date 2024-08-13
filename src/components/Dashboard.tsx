import DashboardContent1 from "./DashboardContent"
import { DashBoardHeader } from "./dashBoardHeader"

export const Dashboard = () => {
  return (
    <div className="bg-blue-50">
      <DashBoardHeader />
      <DashboardContent1 />
    </div>
  )
}
