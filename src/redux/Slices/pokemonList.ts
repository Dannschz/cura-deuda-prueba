import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pokemon } from '../../components/types'

interface PokemonsState {
  value: Pokemon[]
}

const initialState: PokemonsState = {
  value: [],
}

export const pokemonsSlice = createSlice({
  // Usamos esta porción del estado para manejar la lista de pokemons (añadir y quitar pokemones)
  name: 'pokemons',
  initialState,
  reducers: {
    catchPokemon: (state, action: PayloadAction<Pokemon>) => {
      // evitar que se añada un pokemon que ya está en la lista
      if (state.value.find(pokemon => pokemon.id === action.payload.id)) {
        return state
      }
      state.value.push(action.payload)
    },
    removePokemon: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(pokemon => pokemon.id !== action.payload)
    },
  },
})

export const { catchPokemon, removePokemon } = pokemonsSlice.actions
export default pokemonsSlice.reducer
