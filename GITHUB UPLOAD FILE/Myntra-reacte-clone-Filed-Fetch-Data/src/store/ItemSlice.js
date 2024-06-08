import { createSlice } from "@reduxjs/toolkit"
import { DefaultItems } from "./items"
  const ItemSlice = createSlice({
  name: 'item',
  initialState: DefaultItems,
  reducers: {
    addIntialState: (stat,action) => {
         return action.payload
    }
  }
  
  })

  export const ItmeAction = ItemSlice.actions

  export default ItemSlice