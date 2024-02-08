// src/redux/listSlice.js
import { createSlice } from "@reduxjs/toolkit";
// import { auth } from "../../firebase/firebase";
import axios from "axios";

const milliseconds = Date.now();
const isoDate = new Date(milliseconds).toISOString();
// const userId = auth.currentUser?.uid
 const fetchWish = async (id,userId) => {
    try {
      const response = await axios.post(`http://129.146.110.127:3000/gen?coll=wishlist`, {
        "id": id,
        "productId": id,
        "addedAt": isoDate,
        "userId": userId
      });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
 const deletItem = async (id,userId) => {
    try {
      const response = await axios.delete(`http://129.146.110.127:3000/gen?coll=wishlist`, {
        "id": id,
        "productId": id,//المفروض تبعت ال product Id بس 
        "addedAt": isoDate,//استنه عمر علي ما بخلصها
        "userId": userId
      });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  const handelHartClick = (id,userId) => {
    fetchWish(id,userId).then((response) => {
      console.log(response)
      console.log(id, isoDate, userId)
    });
  }
  const handeldeletitem = (id,userId) => {
    deletItem(id,userId).then((response) => {
      console.log(response)
      console.log(id, isoDate, userId)
    });
  }

const listSlice = createSlice({
  name: "wishList",
  initialState: {
    List: [],
  },


  reducers: {
    addToList: (state, action) => {
      let itemInCart = state.List.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart = state.List.filter((item) => item.id !== action.payload.id); //remove item
        handeldeletitem(action.payload.id,action.payload.userId)
        state.List = itemInCart;

      } else {
        state.List.push({ ...action.payload }); //add item
        handelHartClick(action.payload.id,action.payload.userId)
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
export const { addToList, removeItem } = listSlice.actions;
