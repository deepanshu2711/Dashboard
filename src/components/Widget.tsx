
import { BiPlus } from "react-icons/bi";
import { WidgetType } from "../types";
// import { RxCross2 } from "react-icons/rx";


interface WidgetProps {
    widgetData:WidgetType | null,
    isOpen:boolean,
    setisOpen:(open:boolean) => void
}

const Widget = ({widgetData , setisOpen} : WidgetProps) => {
    return ( 
        <div className="bg-gray-100 p-3 rounded-lg">
            
            <div className="bg-white rounded-lg p-2 h-[200px] w-full ">
                <p className="text-[14px] font-semibold">{widgetData?.name}</p>
                <p className="text-[14px] mt-2 text-gray-500">{widgetData?.text}</p>
                <div className="flex items-center justify-center w-full h-full">
                    {
                        widgetData === null && (
                            <div onClick={() => setisOpen(true)} className=" cursor-pointer group gap-4 p-1 px-4 rounded-md hover:border-gray-900 border-gray-300 border flex items-center">
                            <BiPlus  className="text-gray-400 group-hover:text-black" />
                            <p className="font-semibold text-[13px] text-gray-400 group-hover:text-black">Add Widget</p>
                            </div>
                        )
                    }
                </div>
            </div>
         </div>
     );
}
 
export default Widget;