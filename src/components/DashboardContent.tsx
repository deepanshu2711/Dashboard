
import DashBoardCategory from "./DashboardCategory";
import DashboardContentHeader from "./DashboardContentHeader";

const DashboardContent1 = () => {
    return ( 
        <div className="bg-blue-50 py-8 px-10 flex flex-col gap-10 ">
            <DashboardContentHeader />    
            <div className="flex flex-col gap-5">
                <DashBoardCategory />
                <DashBoardCategory />
                <DashBoardCategory />                
            </div>       
        </div>
     );
}
 
export default DashboardContent1;