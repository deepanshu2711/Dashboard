import { BiSearch } from "react-icons/bi"
import { CiBellOn } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

interface DashBoardHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const DashBoardHeader = ({searchQuery, setSearchQuery}:DashBoardHeaderProps) => {
  
  return (
    <div className="flex md:flex-row flex-col items-center md:justify-between bg-white px-5 md:px-10 py-2 fixed top-0 left-0 right-0 z-10 ">
      <h1 className="text-blue-700 font-semibold text-[12px]/">DashboardV2</h1>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-5 lg:gap-10 w-full mt-2 md:mt-0 ">
          <div className="cursor-pointer min-w-[200px] flex-1 p-1 md:min-w-[300px]  lg:min-w-[500px] rounded-md flex items-center gap-2 bg-gray-100 border-blue-100 border-2 text-gray-600">
            <BiSearch className="h-5 w-5 cursor-pointer" />
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type="text" placeholder="Search anything..." className="flex-1 bg-transparent text-[14px] focus-within:outline-none" />
          </div>
          <button className="p-1 rounded-md px-4 bg-gray-100 text-[12px] font-semibold border-blue-100 border-2">Search</button>

        </div>
        <div className=" hidden md:flex items-center gap-5">
          <CiBellOn className="w-6 h-6 " />
          <FaUser className="w-4 h-4" />
        </div>
      </div>

    </div>
  )
}
