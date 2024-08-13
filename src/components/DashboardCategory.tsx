
import { CategoryType, WidgetType } from "../types";
import Widget from "./Widget";


interface DashBoardCategoryProps {
    category:CategoryType
    isOpen:boolean
    setisOpen:(id:number) => void,
    forSearch:boolean
}

const DashBoardCategory = ({category , isOpen , setisOpen , forSearch} : DashBoardCategoryProps) => {
    const numberOfWidgets = category.Widgets.length;
    const placeholders = 3 - numberOfWidgets;
    return ( 
        <div>
            <p className="text-[14px] font-semibold">{category.CategoryName}</p>    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    category.Widgets.map((widget : WidgetType) => (
                        <Widget categoryId={category.id} widgetData={widget} isOpen={isOpen} setisOpen={setisOpen} />
                    ) )
                }
                {!forSearch && Array.from({ length: placeholders }, (_, index) => (
                    <Widget categoryId={category.id} key={`placeholder-${index}`} widgetData={null} isOpen={isOpen} setisOpen={setisOpen} />
                ))}
            </div>
        </div>
     );
}
 
export default DashBoardCategory;