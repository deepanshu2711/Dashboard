export type CategoryType = {
    id: number;
    CategoryName: string;
    Widgets: WidgetType[]
}

export type WidgetType ={
    id: number;
    name: string;
    text: string;
}