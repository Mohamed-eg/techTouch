// src/redux/listSlice.js
import { createSlice } from "@reduxjs/toolkit";
// import { auth } from "../../firebase/firebase";
import axios from "axios";

import { v4 as uuidv4 } from 'uuid';

const milliseconds = Date.now();
const isoDate = new Date(milliseconds).toISOString();
const randomStrind = Math.random().toString(36).substring(2,8);
const randomID =uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
// const userId = auth.currentUser?.uid
 const fetchWish = async (id,productId,userId) => {
    try {
      const response = await axios.post(`https://backend.touchtechco.com/gen?coll=wishlist`, {
        "id": id,
        "productId": productId,
        "addedAt": isoDate,
        "userId": userId
      });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
 const deletItem = async (id) => {
    try {
      const response = await axios.delete(`https://backend.touchtechco.com/gen?coll=wishlist`, {data: id });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  const handelHartClick = (id,productId,userId) => {
    fetchWish(id,productId,userId).then((response) => {
      console.log(response)
      console.log(id, isoDate, userId)
    });
  }
  // delete the item from data base by his randum ID and delele it from rudex state by his product id
  const handeldeletitem = (id) => {
    deletItem(id).then((response) => {
      console.log(response)
      console.log(id, isoDate)
    });
  }

const listSlice = createSlice({
  name: "wishList",
  initialState: {
    List: [],
  },


  reducers: {
    addToList: (state, action) => {
      let itemInCart = state.List.find((item) => item.productId === action.payload.productId);
      if (itemInCart) {
        itemInCart = state.List.filter((item) => item.productId !== action.payload.productId); //remove item
        handeldeletitem(action.payload.id)
        state.List = itemInCart;

      } else {
        state.List.push({ ...action.payload }); //add item
        handelHartClick(action.payload.id, action.payload.productId, action.payload.userId)
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.List.filter(
        (item) => item.id !== action.payload
      );
      state.List = removeItem;
    },
    changAll: (state, action)=>{
      state.List = action.payload;
    }
  },
});

export const wishListReducer = listSlice.reducer;
export const { addToList, removeItem,changAll } = listSlice.actions;
