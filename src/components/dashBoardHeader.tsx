import { BiSearch } from "react-icons/bi"
import { CiBellOn } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

export const DashBoardHeader = () => {
  return (
    <div className="flex items-center justify-between bg-white px-10 py-2 ">
      <h1 className="text-blue-700 font-semibold text-[12px]/">DashboardV2</h1>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-10 ">
          <div className="cursor-pointer p-1 min-w-[500px] rounded-md flex items-center gap-2 bg-gray-100 border-blue-100 border-2 text-gray-600">
            <BiSearch className="h-5 w-5 cursor-pointer" />
            <input type="text" placeholder="Search anything..." className="flex-1 bg-transparent text-[14px]" />
          </div>
          <button className="p-1 rounded-md px-4 bg-gray-100 text-[12px] font-semibold border-blue-100 border-2">Search</button>

        </div>
        <div className="flex items-center gap-5">
          <CiBellOn className="w-6 h-6 " />
          <FaUser className="w-4 h-4" />
        </div>
      </div>

    </div>
  )
}
