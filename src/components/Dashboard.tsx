import { useState } from "react";
import DashboardContent1 from "./DashboardContent"
import { DashBoardHeader } from "./dashBoardHeader"

export const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery)
  return (
    <div className="bg-blue-50">
      <DashBoardHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <DashboardContent1 searchQuery={searchQuery}  />
    </div>
  )
}
