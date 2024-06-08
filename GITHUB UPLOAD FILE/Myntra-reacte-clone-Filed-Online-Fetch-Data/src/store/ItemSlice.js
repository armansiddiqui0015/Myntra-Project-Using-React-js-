import { createSlice } from "@reduxjs/toolkit"
import { DefaultItems } from "./item"

  const ItemSlice = createSlice({
  name: 'item',
  initialState: DefaultItems,
  reducers: {
    addIntialState: (store) => {
         return store
    }
  }
  
  })

  export const ItmeAction = ItemSlice.actions

  export default ItemSlice