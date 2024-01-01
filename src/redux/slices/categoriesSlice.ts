import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StringObject = {
    [key: string]: string | number;
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
        { Name: "computer", url: "/categorycomputer@2x.png" },
        { Name: "camera", url: "/categorycamera@2x.png" },
        { Name: "smartwatch", url: "/categorycamera@2x.png" },
        { Name: "headphone", url: "/categoryheadphone@2x.png" },
        { Name: "phone", url: "/categorycellphone@2x.png" },
        { Name: "gaming", url: "/categorygamepad@2x.png" },
        { Name: "Taplet", url: "/categorycamera@2x.png" },
        { Name: "Acsses", url: "/categorycamera@2x.png" },
        { Name: "Tools", url: "/categorycamera@2x.png" },],
    selectedCategory: 'computer',
    allproducts: [
        { name: "ASUS", id: "1", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700 },
        { name: "ASUS", id: "2", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700 },
        { name: "ASUS", id: "3", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700 },
        { name: "ASUS", id: "4", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700 },
        { name: "ASUS", id: "5", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700 },
        { name: "ASUS", id: "6", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700 },
        { name: "ASUS", id: "7", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700 },
        { name: "ASUS", id: "8", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700 },
        { name: "ASUS", id: "9", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700 },
        { name: "ASUS", id: "10", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700 },
        { name: "ASUS", id: "11", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700 },
        { name: "ASUS", id: "12", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700 },
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