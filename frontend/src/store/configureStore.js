import { configureStore } from '@reduxjs/toolkit'
import keyReducer from './selectedKeySlice'

export default configureStore({
  reducer: {
    key: keyReducer,
  },
})
