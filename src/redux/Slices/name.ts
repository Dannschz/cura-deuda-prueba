import { createSlice } from '@reduxjs/toolkit'

export const nameSlice = createSlice({
  // Esta porción del estado se usa para cambiar el nombre del pokedex
  name: 'name',
  initialState: {
    value: '',
  },
  reducers: {
    changeName: (state, action: { payload: string }) => {
      state.value = action.payload
    },
  },
})

export const { changeName } = nameSlice.actions

export default nameSlice.reducer
