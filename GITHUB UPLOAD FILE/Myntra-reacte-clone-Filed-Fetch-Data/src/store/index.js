import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";
import bagSlice from "./bagSlice";

const MyntraStore = configureStore({
  reducer: {
    item: ItemSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default MyntraStore;
