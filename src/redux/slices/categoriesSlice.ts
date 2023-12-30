import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StringObject = {
    [key: string]: string;
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

interface CategoriesState {
    allCategories: StringObjectArray;
    selectedCategory: Category | '';
}

const initialState: CategoriesState = {
    allCategories: [
        { Name: "computer", url: "./" },
        { Name: "smartwatch", url: "./" },
        { Name: "headphone", url: "./" },
        { Name: "phone", url: "./" },
        { Name: "gaming", url: "./" },
        { Name: "Taplet", url: "./" },
        { Name: "Acsses", url: "./" },
        { Name: "Tools", url: "./" },],
    selectedCategory: '',
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<Category[]>) => {
            state.allCategories = action.payload as unknown as StringObjectArray;
        },
        setSelectedCategory: (state, action: PayloadAction<Category | ''>) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setCategories, setSelectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;