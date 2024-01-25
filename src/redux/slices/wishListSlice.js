// src/redux/listSlice.js
import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "wishList",
  initialState: {
    List: [],
  },
  reducers: {
    addToList: (state, action) => {
      let itemInCart = state.List.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart = state.List.filter((item) => item.id !== action.payload.id);
        state.List = itemInCart;
      } else {
        state.List.push({ ...action.payload });
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.List.filter(
        (item) => item.id !== action.payload
      );
      state.List = removeItem;
    },
  },
});

export const wishListReducer = listSlice.reducer;
export const { addToList, removeItem } = listSlice.actions;
