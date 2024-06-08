import {configureStore} from '@reduxjs/toolkit'
import ItemSlice from './ItemSlice'

const MyntraStore =  configureStore({
 reducer: {
  item: ItemSlice.reducer
 }
})

export default MyntraStore