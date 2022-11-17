// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
import { createSlice } from '@reduxjs/toolkit'
export const userNameSlice = createSlice({
  name: 'userName',
  initialState: 'Other Name',
  reducers: {
    change: (state, action) => {
      const users = action.payload
      return users
    },
  },
})

export const { change } = userNameSlice.actions

export default userNameSlice.reducer
