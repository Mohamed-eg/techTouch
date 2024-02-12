// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from "axios"
import {auth} from "../../firebase/firebase"

const userID = auth.currentUser?.uid
//   const getmycart = async () => {
//     try {
//         console.log(userID)
//       const response = await axios.get(`https://backend.touchtechco.com/userGen?coll=cart&userId=${userID}`);
//       return response.data.data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return null;
//     }
//   };
let resalt =[]
// getmycart().then((res)=>{resalt=res})
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart:resalt ,
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(state.cart)
            const itemInCart = state.cart?.find((item) => item.id === action.payload.id &&item.color ===action.payload.color);
            if (itemInCart) {
                itemInCart.quantity=  parseInt(itemInCart.quantity) +1 ;
            } else {
                state.cart.push({ ...action.payload });
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            console.log(action.payload)
            const remanItems = state.cart.filter((item) => item.id !== action.payload);
            state.cart = remanItems;
        },
        setCart: (state,action)=>{
            state.cart=action.payload
        }
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    setCart,
} = cartSlice.actions;