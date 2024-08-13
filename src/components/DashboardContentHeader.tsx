import { BiPlus } from "react-icons/bi";
import { CgMoreVertical } from "react-icons/cg";
import { TfiReload } from "react-icons/tfi";
import { FaClock } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const DashboardContentHeader = () => {
    return ( 
        <div className="flex items-center justify-between">
            <p className="tet-[16px] font-semibold">CNAPP Dashbaord</p>
            <div className="flex items-center gap-5">
                <button className="flex items-center gap-2 rounded-md bg-white py-1 px-2 border border-gray-400">
                    <p className="text-[12px] text-gray-600 ">Add Widget</p>
                    <BiPlus />
                </button>
                <button className="flex items-center gap-2 rounded-md bg-white py-1 px-2 border border-gray-400">
                    <TfiReload />
                </button>
                <button className="flex items-center gap-2 rounded-md bg-white py-1 px-2 border border-gray-400">
                    <CgMoreVertical />
                </button>
                <button className="flex items-center gap-2 rounded-md bg-white py-1 px-2 border border-blue-700">
                    <FaClock className="border-r text-blue-700" />
                    <p className="text-blue-700 font-semibold text-[12px]">Last 2 days</p>
                    <FaChevronDown  className="text-blue-700 h-3 w-3" />
                </button>
            </div>
        </div>
     );
}
 
export default DashboardContentHeader;