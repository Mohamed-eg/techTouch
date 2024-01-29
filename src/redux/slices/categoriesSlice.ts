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
    selectedProducts: any

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
        { quantety: 90, Name: "accessories", url: "/device-smart-watch.svg" },
        { quantety: 95, Name: "Tools", url: "/device-smart-watch.svg" },],
    selectedCategory: 'computer',
    selectedProducts: [],
    allproducts: [
        [
            { name: "ASUS FHD Gaming Laptop", categories: "computer", id: "1", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["red", "white", "black"], isLoved: true, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "computer", id: "2", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 800, colors: ["blue", "black", "white"], isLoved: false, ischeaked: true, isNew: false },
            { name: "ASUS FHD Gaming Laptop", categories: "computer", id: "3", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1700, colors: ["red", "black", "blue"], isLoved: true, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "computer", id: "4", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 500, colors: ["green", "black", "white"], isLoved: false, ischeaked: true, isNew: false },
            { name: "ASUS FHD Gaming Laptop", categories: "camera", id: "5", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 600, colors: ["blue", "black", "white"], isLoved: true, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "camera", id: "6", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 7500, colors: ["red", "black", "white"], isLoved: false, ischeaked: true, isNew: false },
            { name: "ASUS FHD Gaming Laptop", categories: "camera", id: "7", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 8700, colors: ["white", "black", "blue"], isLoved: false, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "camera", id: "8", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 2700, colors: ["black", "black", "white"], isLoved: true, ischeaked: true, isNew: false },
        ],
        [
            { name: "ASUS FHD Gaming Laptop", categories: "smartwatch", id: "9", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 900, colors: ["red", "white", "black"], isLoved: false, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "smartwatch", id: "10", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1000, colors: ["blue", "black", "white"], isLoved: true, ischeaked: true, isNew: false },
            { name: "ASUS FHD Gaming Laptop", categories: "smartwatch", id: "11", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1100, colors: ["red", "black", "white"], isLoved: false, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "smartwatch", id: "12", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1200, colors: ["green", "black", "white"], isLoved: true, ischeaked: true, isNew: false },
            { name: "ASUS FHD Gaming Laptop", categories: "headphone", id: "13", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1520, colors: ["blue", "black", "white"], isLoved: false, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "headphone", id: "14", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 3650, colors: ["red", "black", "white"], isLoved: true, ischeaked: true, isNew: false },
            { name: "ASUS FHD Gaming Laptop", categories: "headphone", id: "15", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 2010, colors: ["white", "black", "white"], isLoved: false, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "headphone", id: "16", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 2200, colors: ["black", "black", "white"], isLoved: true, ischeaked: true, isNew: false },
        ]
        ,
        [
            { name: "ASUS FHD Gaming Laptop", categories: "phone", id: "17", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1500, colors: ["red", "white", "black"], isLoved: true, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "phone", id: "18", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1200, colors: ["blue", "black", "white"], isLoved: false, ischeaked: true, isNew: false },
            { name: "ASUS FHD Gaming Laptop", categories: "phone", id: "19", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1100, colors: ["red", "black", "white"], isLoved: true, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "phone", id: "20", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 5600, colors: ["green", "black", "red"], isLoved: false, ischeaked: true, isNew: false },
            { name: "ASUS FHD Gaming Laptop", categories: "gaming", id: "21", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 7400, colors: ["blue", "black", "white"], isLoved: true, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "gaming", id: "22", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 3200, colors: ["red", "black", "white"], isLoved: true, ischeaked: true, isNew: false },
            { name: "ASUS FHD Gaming Laptop", categories: "gaming", id: "23", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 2500, colors: ["blue", "black", "white"], isLoved: false, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "gaming", id: "24", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1300, colors: ["black", "black", "white"], isLoved: false, ischeaked: true, isNew: false },
        ]
        ,
        [
            { name: "ASUS FHD Gaming Laptop", categories: "taplet", id: "25", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 700, colors: ["red", "white", "black"], isLoved: true, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "taplet", id: "26", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 200, colors: ["blue", "black", "white"], isLoved: true, ischeaked: true, isNew: false },
            { name: "ASUS FHD Gaming Laptop", categories: "taplet", id: "27", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 900, colors: ["red", "black", "white"], isLoved: true, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "taplet", id: "28", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 800, colors: ["green", "black", "white"], isLoved: true, ischeaked: true, isNew: false },
            { name: "ASUS FHD Gaming Laptop", categories: "accessories", id: "29", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1500, colors: ["blue", "black", "white"], isLoved: true, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "accessories", id: "30", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1200, colors: ["red", "black", "white"], isLoved: true, ischeaked: true, isNew: false },
            { name: "ASUS FHD Gaming Laptop", categories: "accessories", id: "31", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 1100, colors: ["white", "black", "white"], isLoved: true, ischeaked: true, isNew: true },
            { name: "ASUS FHD Gaming Laptop", categories: "accessories", id: "32", url: "/ideapadgaming3i01500x500-1@2x.png", prise: 950, colors: ["black", "black", "white"], isLoved: true, ischeaked: true, isNew: false },
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
        setSelectedProducts: (state = initialState, action) => {
            const { category } = action.payload;
            console.log(category)
            switch (category) {
                case 'computer':
                    // return { ...state, selectedProducts: [...state.selectedProducts,...state.allproducts.flat().filter(p => p.categories === "computer")] };
                    state.allproducts.flat().map(p => { if (p.categories === "computer") { p.ischeaked = !p.ischeaked } })
                    break;
                // console.log(state.allproducts.flat().filter(p => p.categories === "computer"))
                case 'camera':
                    state.allproducts.flat().map(p => { if (p.categories === "camera") { p.ischeaked = !p.ischeaked } })
                    break;
                // return { ...state, selectedProducts: [...state.selectedProducts,...state.allproducts.flat().filter(p => p.categories === "camera")] };
                case 'smartwatch':
                    state.allproducts.flat().map(p => { if (p.categories === "smartwatch") { p.ischeaked = !p.ischeaked } })
                    break;
                // return { ...state, selectedProducts: state.allproducts.flat().filter(p => p.categories === "smartwatch") };
                case 'headphone':
                    state.allproducts.flat().map(p => { if (p.categories === "headphone") { p.ischeaked = !p.ischeaked } })
                    break;
                // return { ...state, selectedProducts: state.allproducts.flat().filter(p => p.categories === "headphone") };
                case 'gaming':
                    state.allproducts.flat().map(p => { if (p.categories === "gaming") { p.ischeaked = !p.ischeaked } })
                    break;
                // return { ...state, selectedProducts: state.allproducts.flat().filter(p => p.categories === "gaming") };
                case 'taplet':
                    state.allproducts.flat().map(p => { if (p.categories === "taplet") { p.ischeaked = !p.ischeaked } })
                    break;
                // return { ...state, selectedProducts: state.allproducts.flat().filter(p => p.categories === "taplet") };
                case 'tools':
                    state.allproducts.flat().map(p => { if (p.categories === "tools") { p.ischeaked = !p.ischeaked } })
                    break;
                // return { ...state, selectedProducts: state.allproducts.flat().filter(p => p.categories === "tools") };
                case 'phone':
                    state.allproducts.flat().map(p => { if (p.categories === "phone") { p.ischeaked = !p.ischeaked } })
                    break;
                case 'accessories':
                    state.allproducts.flat().map(p => { if (p.categories === "accessories") { p.ischeaked = !p.ischeaked } })
                    break;
                // return { ...state, selectedProducts: state.allproducts.flat().filter(p => p.categories === "phone") };

                default:
                    return state;
            }
        }
    },
});

export const { setCategories, setSelectedCategory, setAllProducts, setSelectedProducts } = categoriesSlice.actions;

export default categoriesSlice.reducer;