import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './Slices/pokemonList'
import nameReducer from './Slices/name'

export default configureStore({
  reducer: {
    name: nameReducer,
    pokemons: pokemonsReducer,
  },
})
