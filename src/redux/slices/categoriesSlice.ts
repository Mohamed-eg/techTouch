import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { auth } from "../../firebase/firebase";
const uid = auth.currentUser?.uid
// import { useEffect } from "react";
// import axios from 'axios';

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
    allproducts: allProducts | any;
    selectedProducts: any
    currentUser: any
}

// const fetchData = async () => {
//     try {
//         const response = await axios.get(`https://backend.touchtechco.com/homeProducts`);
//         return response.data.data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return null;
//     }
// };
// useEffect(
//     ()=>{
//         fetchData().then(data => { console.log(data) });
//     },[]
// )
let statecData = [
    [
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "computer", id: "1", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 700, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "computer", id: "2", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 800, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: false, ischeaked: true, isNew: false },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "computer", id: "3", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 1700, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "computer", id: "4", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 500, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: false, ischeaked: true, isNew: false },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "camera", id: "5", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 600, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "camera", id: "6", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 7500, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: false, ischeaked: true, isNew: false },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "camera", id: "7", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 8700, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: false, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "camera", id: "8", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 2700, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: false },
    ],
    [
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "smartwatch", id: "9", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 900, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: false, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "smartwatch", id: "10", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 1000, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: false },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "smartwatch", id: "11", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 1100, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: false, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "smartwatch", id: "12", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 1200, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: false },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "headphone", id: "13", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 1520, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: false, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "headphone", id: "14", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 3650, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: false },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "headphone", id: "15", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 2010, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: false, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "headphone", id: "16", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 2200, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: false },
    ]
    ,
    [
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "phone", id: "17", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 1500, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "phone", id: "18", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 1200, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: false, ischeaked: true, isNew: false },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "phone", id: "19", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 1100, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "phone", id: "20", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 5600, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: false, ischeaked: true, isNew: false },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "gaming", id: "21", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 7400, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "gaming", id: "22", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 3200, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: false },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "gaming", id: "23", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 2500, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: false, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "gaming", id: "24", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 1300, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: false, ischeaked: true, isNew: false },
    ]
    ,
    [
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "taplet", id: "25", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 700, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "taplet", id: "26", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 200, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: false },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "taplet", id: "27", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 900, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "taplet", id: "28", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 800, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: false },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "accessories", id: "29", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 1500, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "accessories", id: "30", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 1200, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: false },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "accessories", id: "31", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 1100, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: true },
        { title: "ASUS FHD Gaming Laptop", shortDesc: "lauren lauren", longDesc: "lauren lauren lauren", categoryId: "accessories", id: "32", url: "/ideapadgaming3i01500x500-1@2x.png", middlePrice: 1000, traderprice: 800, userPrice: 950, colors: [{ color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }, { color: "4281138465.0", images: ["https://picsum.photos/id/432/500/200"] }], isLoved: true, ischeaked: true, isNew: false },
    ]

]
const initialState: CategoriesState = {
    allCategories: [
        { createdAt: "2024-01-07T14", quantety: 20, title: "computer", id: "1", imageLink: "/apple-imac-2021.svg" },
        { createdAt: "2024-01-07T14", quantety: 30, title: "camera", id: "2", imageLink: "/camera.svg" },
        { createdAt: "2024-01-07T14", quantety: 40, title: "smartwatch", id: "3", imageLink: "/device-smart-watch.svg" },
        { createdAt: "2024-01-07T14", quantety: 50, title: "headphone", id: "4", imageLink: "/headset.svg" },
        { createdAt: "2024-01-07T14", quantety: 60, title: "phone", id: "5", imageLink: "/phone.svg" },
        { createdAt: "2024-01-07T14", quantety: 70, title: "gaming", id: "6", imageLink: "/gamepad.svg" },
        { createdAt: "2024-01-07T14", quantety: 80, title: "Taplet", id: "7", imageLink: "/device-smart-watch.svg" },
        { createdAt: "2024-01-07T14", quantety: 90, title: "accessories", id: "8", imageLink: "/device-smart-watch.svg" },
        { createdAt: "2024-01-07T14", quantety: 95, title: "Tools", id: "9", imageLink: "/device-smart-watch.svg" },],
    selectedCategory: 'computer',
    selectedProducts: [],
    allproducts: statecData,
    currentUser: ''
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
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
            state.allproducts = state.allproducts.flat().filter((p: any) => state.selectedCategory === p.categoryId)
            // const { category } = action.payload;
            // console.log(category)
            // switch (category) {
            //     case 'computer':
            //         // return { ...state, selectedProducts: [...state.selectedProducts,...state.allproducts.flat().filter(p => p.categories === "computer")] };
            //         state.allproducts.flat().map((p: any) => { if (p.categories === "computer") { p.ischeaked = !p.ischeaked } })
            //         break;
            //     // console.log(state.allproducts.flat().filter(p => p.categories === "computer"))
            //     case 'camera':
            //         state.allproducts.flat().map((p: any) => { if (p.categories === "camera") { p.ischeaked = !p.ischeaked } })
            //         break;
            //     // return { ...state, selectedProducts: [...state.selectedProducts,...state.allproducts.flat().filter(p => p.categories === "camera")] };
            //     case 'smartwatch':
            //         state.allproducts.flat().map((p: any) => { if (p.categories === "smartwatch") { p.ischeaked = !p.ischeaked } })
            //         break;
            //     // return { ...state, selectedProducts: state.allproducts.flat().filter(p => p.categories === "smartwatch") };
            //     case 'headphone':
            //         state.allproducts.flat().map((p: any) => { if (p.categories === "headphone") { p.ischeaked = !p.ischeaked } })
            //         break;
            //     // return { ...state, selectedProducts: state.allproducts.flat().filter(p => p.categories === "headphone") };
            //     case 'gaming':
            //         state.allproducts.flat().map((p: any) => { if (p.categories === "gaming") { p.ischeaked = !p.ischeaked } })
            //         break;
            //     // return { ...state, selectedProducts: state.allproducts.flat().filter(p => p.categories === "gaming") };
            //     case 'taplet':
            //         state.allproducts.flat().map((p: any) => { if (p.categories === "taplet") { p.ischeaked = !p.ischeaked } })
            //         break;
            //     // return { ...state, selectedProducts: state.allproducts.flat().filter(p => p.categories === "taplet") };
            //     case 'tools':
            //         state.allproducts.flat().map((p: any) => { if (p.categories === "tools") { p.ischeaked = !p.ischeaked } })
            //         break;
            //     // return { ...state, selectedProducts: state.allproducts.flat().filter(p => p.categories === "tools") };
            //     case 'phone':
            //         state.allproducts.flat().map((p: any) => { if (p.categories === "phone") { p.ischeaked = !p.ischeaked } })
            //         break;
            //     case 'accessories':
            //         state.allproducts.flat().map((p: any) => { if (p.categories === "accessories") { p.ischeaked = !p.ischeaked } })
            //         break;
            //     // return { ...state, selectedProducts: state.allproducts.flat().filter(p => p.categories === "phone") };

            //     default:
            //         return state;
            // }
        }
    },
});

export const { setCategories, setSelectedCategory, setAllProducts, setSelectedProducts, setCurrentUser } = categoriesSlice.actions;

export default categoriesSlice.reducer;