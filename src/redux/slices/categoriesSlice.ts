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
            { name: "ASUS FHD Gaming Laptop", id: "2", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["blue", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "3", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["red", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "4", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["green", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "5", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["blue", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "6", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["red", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "7", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["white", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "8", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["black", "black", "white"], isNew: false },
        ],
        [
            { name: "ASUS FHD Gaming Laptop", id: "9", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["red", "white", "black"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "10", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["blue", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "11", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["red", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "12", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["green", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "13", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["blue", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "14", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["red", "black", "white"], isNew: false },
            { name: "ASUS FHD Gaming Laptop", id: "15", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["white", "black", "white"], isNew: true },
            { name: "ASUS FHD Gaming Laptop", id: "16", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["black", "black", "white"], isNew: false },
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