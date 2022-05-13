import { createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '../../components/types'

export const pokemonsSlice = createSlice({
  // Usamos esta porción del estado para manejar la lista de pokemons (añadir y quitar pokemones)
  name: 'pokemons',
  initialState: {
    value: [] as Pokemon[],
  },
  reducers: {
    catchPokemon: (state, action: { payload: Pokemon }) => {
      state.value.push(action.payload)
    },
    removePokemon: (state, action: { payload: string }) => {
      state.value = state.value.filter(pokemon => pokemon.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { catchPokemon, removePokemon } = pokemonsSlice.actions

export default pokemonsSlice.reducer
