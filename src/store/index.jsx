import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter.slice'
import userNameSlice from './slices/userName.slice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    userName: userNameSlice,
  },
})
