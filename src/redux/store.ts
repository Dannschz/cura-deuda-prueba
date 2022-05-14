import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './Slices/pokemonList'
import nameReducer from './Slices/name'

const store = configureStore({
  reducer: {
    name: nameReducer,
    pokemons: pokemonsReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
