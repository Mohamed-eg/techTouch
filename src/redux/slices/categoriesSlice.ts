import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StringObject = {
    [key: string]: string | number | boolean | any;
};

type StringObjectArray = StringObject[];

interface Category {
    name: string;
    products: Product[];
}

interface Product {
    id: number;
    name: string;
    price: number;
}
type allProducts = StringObject[]

interface CategoriesState {
    allCategories: StringObjectArray;
    selectedCategory: Category | string;
    allproducts: allProducts;

}

const initialState: CategoriesState = {
    allCategories: [
        { quantety: 20, Name: "computer", url: "/apple-imac-2021.svg" },
        { quantety: 30, Name: "camera", url: "/camera.svg" },
        { quantety: 40, Name: "smartwatch", url: "/device-smart-watch.svg" },
        { quantety: 50, Name: "headphone", url: "/headset.svg" },
        { quantety: 60, Name: "phone", url: "/phone.svg" },
        { quantety: 70, Name: "gaming", url: "/gamepad.svg" },
        { quantety: 80, Name: "Taplet", url: "/device-smart-watch.svg" },
        { quantety: 90, Name: "Acsses", url: "/device-smart-watch.svg" },
        { quantety: 95, Name: "Tools", url: "/device-smart-watch.svg" },],
    selectedCategory: 'computer',
    allproducts: [
        [
            { name: "ASUS FHD Gaming Laptop", id: "1", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["red", "white", "black"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "2", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 800, colors: ["blue", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "3", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1700, colors: ["red", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "4", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 500, colors: ["green", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "5", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 600, colors: ["blue", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "6", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 7500, colors: ["red", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "7", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 8700, colors: ["white", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "8", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 2700, colors: ["black", "black", "white"], isNew: false },
        ],
        [
            { name: "ASUS FHD Gaming Laptop", id: "9", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 900, colors: ["red", "white", "black"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "10", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1000, colors: ["blue", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "11", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1100, colors: ["red", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "12", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1200, colors: ["green", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "13", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1520, colors: ["blue", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "14", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 3650, colors: ["red", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "15", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 2010, colors: ["white", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "16", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 2200, colors: ["black", "black", "white"], isNew: false },
        ]
        ,
        [
            { name: "ASUS FHD Gaming Laptop", id: "17", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1500, colors: ["red", "white", "black"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "18", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1200, colors: ["blue", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "19", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1100, colors: ["red", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "20", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 5600, colors: ["green", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "21", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 7400, colors: ["blue", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "22", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 3200, colors: ["red", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "23", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 2500, colors: ["white", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "24", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1300, colors: ["black", "black", "white"], isNew: false },
        ]
        ,
        [
            { name: "ASUS FHD Gaming Laptop", id: "25", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["red", "white", "black"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "26", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 200, colors: ["blue", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "27", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 900, colors: ["red", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "28", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 800, colors: ["green", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "29", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1500, colors: ["blue", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "30", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1200, colors: ["red", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "31", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1100, colors: ["white", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "32", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 950, colors: ["black", "black", "white"], isNew: false },
        ]

    ]
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<Category[]>) => {
            state.allCategories = action.payload as unknown as StringObjectArray;
        },
        setSelectedCategory: (state, action: PayloadAction<Category | string>) => {
            state.selectedCategory = action.payload;
        },
        setAllProducts: (state, action: PayloadAction<Category[]>) => {
            state.allproducts = action.payload as unknown as StringObjectArray;
        },
    },
});

export const { setCategories, setSelectedCategory, setAllProducts } = categoriesSlice.actions;

export default categoriesSlice.reducer;