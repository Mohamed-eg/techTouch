// src/redux/listSlice.js
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchList",
  initialState: {
    List: [],
  },
  reducers: {
    createList: (state, action) => {
      state.List = action.payload;
      console.log(action.payload);
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const { createList } = searchSlice.actions;
