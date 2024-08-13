import Widget from "./Widget";

const DashBoardCategory = () => {
    return ( 
        <div>
            <p className="text-[14px] font-semibold">CSPM Executive Dashboard</p>    
            <div className="grid grid-cols-3 gap-5">
                <Widget />
                <Widget />
                <Widget />
            </div>
        </div>
     );
}
 
export default DashBoardCategory;