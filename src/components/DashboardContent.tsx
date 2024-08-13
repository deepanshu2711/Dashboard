
import DashBoardCategory from "./DashboardCategory";
import DashboardContentHeader from "./DashboardContentHeader";
import Data from "../data.json"
import { useEffect, useState } from "react";
import { CategoryType } from "../types";
import { RxCross2 } from "react-icons/rx";

const DashboardContent1 = () => {
    const [categoryData , setCategoryData] = useState<CategoryType[]>(Data)
    const [isOpen , setisOpen] = useState(false)
    const [activeCategoryId , setActiveCategoryId] = useState(0)
    const [activecategory , setActiveCategory] = useState<CategoryType>()
    const [newWidgetText , setnewWidgetText] = useState("")
    const [newWidgetName , setnewWidgetName] = useState("")
    const [widgetsToRemove , setWidgetsToremove] = useState<number[]>([])
    
    useEffect(() => {
        const active = categoryData.find((category) => category.id === activeCategoryId)
        setActiveCategory(active)
    }, [activeCategoryId , categoryData])

    const handleAddnewWidget =() =>{
        if (!activecategory) return;
        const newWidget = {
            id:activecategory?.Widgets.length,
            name:newWidgetName,
            text:newWidgetText
        }
        const newCategory = {
            ...activecategory,
            Widgets:[...activecategory.Widgets, newWidget]
        }
        const newCategories = categoryData.map((category) => {
            if(category.id === newCategory.id){
                return newCategory
            }
            return category
        })
        setCategoryData(newCategories)
        setnewWidgetText("")
        setnewWidgetName("")
        console.log(newWidget)
    }


    const handleWidgetsToRemove = (id:number) =>{
        if(!widgetsToRemove.includes(id)){
            setWidgetsToremove([...widgetsToRemove, id])
        }else{
            setWidgetsToremove(widgetsToRemove.filter((widgetId) => widgetId !== id))
        }
    }

    console.log(widgetsToRemove)

    const handleRemoveWidgets = () =>{
        if(!activecategory) return
        const newWidgets = activecategory?.Widgets.filter((widget) => !widgetsToRemove.includes(widget.id))
        const newCategory = {
            ...activecategory,
            Widgets:newWidgets
        }
        const newCategories = categoryData.map((category) => {
            if(category.id === newCategory.id){
                return newCategory
            }
            return category
        })
        setCategoryData(newCategories)
        setisOpen(false)
        setWidgetsToremove([])
    }

    return ( 
        <div className="bg-blue-50 py-8 px-10 flex flex-col gap-10 ">
            {
                isOpen && (
                    <>
                        <div className="fixed inset-0 bg-black opacity-60" />
                        <div className="fixed top-0 bottom-0 right-0 w-[35%] bg-white z-10">
                            <div className="bg-blue-800 p-2 flex items-center justify-between">
                                <p className="font-semibold text-[14px] text-white">Add widget</p>
                                <RxCross2 onClick={() => setisOpen(false)} className="text-white cursor-pointer" />
                            </div>
                            <p className="text-[14px] font-semibold p-2">Personalise your dashboard by adding the following widget</p>
                            <div className="flex items-center gap-3 p-2">
                                {
                                    categoryData.map((category) => (
                                        <div key={category.id} className="flex flex-col">
                                            <p onClick={() => setActiveCategoryId(category.id)} className={`py-2 cursor-pointer text-[12px] font-semibold`}  >{category.CategoryName}</p>
                                            {
                                                category.id === activeCategoryId && (
                                                    <div className="h-[2px] w-full bg-gray-900 rounded-lg" />
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="p-4 flex flex-col gap-2">
                                {
                                    activecategory?.Widgets.map((widget) => (
                                        widget.name !== "" && widget.text !== "" && (
                                            <div className="flex items-center gap-3 p-2 border">
                                                <input defaultChecked onChange={() => handleWidgetsToRemove(widget.id)} type="checkbox" />
                                                <p className="text-[12px] font-semibold">{widget.name}</p>
                                            </div>
                                        )
                                    ))
                                }    
                            </div>
                            {
                               activecategory && activecategory.Widgets &&  activecategory?.Widgets?.length <3 && (
                                    <div className="border-t">
                                        <div className="p-2 mt-5">
                                            <p className="text-center text-[14px] font-semibold">Add new widget to {activecategory?.CategoryName}</p>
                                            <div>
                                                <div className="flex flex-col gap-1 p-2">
                                                    <p className="text-[10px] font-semibold">Name</p>
                                                    <input value={newWidgetName} onChange={(e) => setnewWidgetName(e.target.value)} type="text" placeholder="Widget name" className="w-full p-1 border rounded-md text-[14px]" />
                                                </div>
                                                <div className="flex flex-col gap-1 p-2">
                                                    <p className="text-[10px] font-semibold">Text</p>
                                                    <input value={newWidgetText} onChange={(e) => setnewWidgetText(e.target.value)} type="text" placeholder="Widget text" className="w-full p-1 border rounded-md text-[14px]" />
                                                </div>
                                                <div className="flex items-end justify-end">
                                                <button onClick={handleAddnewWidget} className="py-2 self m-2 px-6 bg-blue-900 text-white rounded-md">Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="fixed bottom-0 right-0 p-2">
                                <button className="py-1 self m-2 px-6 border rounded-md">Cancel</button>
                                <button onClick={handleRemoveWidgets} disabled={widgetsToRemove.length < 1} className="py-1 self m-2 px-6 bg-blue-950 text-white rounded-md disabled:bg-opacity-60">Confirm</button>
                            </div>
                        </div>
                    </>
                )
            }
            <DashboardContentHeader />    
            <div className="flex flex-col gap-5">
                {
                    categoryData.map((category:CategoryType) => (
                        <DashBoardCategory key={category.id} isOpen={isOpen} setisOpen={setisOpen} category={category} />
                    ))
                }               
            </div>       
        </div>
     );
}
 
export default DashboardContent1;