import { createSlice } from '@reduxjs/toolkit'

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0.0,
  reducers: {
    increment: (state, action) => {
      const inputValue = Number(action.payload)
      return state + inputValue
    },
  },
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer
