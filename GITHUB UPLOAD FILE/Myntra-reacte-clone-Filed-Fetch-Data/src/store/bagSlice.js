import { createSlice } from "@reduxjs/toolkit";
const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addTobag: (stat, action) => {
      stat.push(action.payload);
    },
    removeTobag: (stat, action) => {
      return stat.filter((item) => item !== action.payload);
    },
  },
});

export const bagAction = bagSlice.actions;

export default bagSlice;
