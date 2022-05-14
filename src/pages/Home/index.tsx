import React, { useEffect } from 'react'
import HeaderSearchAndMenu from '../../components/HeaderSearchAndMenu'
import PokemonList from '../../components/PokemonList'
import { PokemonListArray } from '../../components/types'
import useSearchHook from '../../hooks/useSearchHook'
import './styles.scss'

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/'

// Pagina princilap que renderiza una lista de pokemones
function Home() {
  const [pokemonList, setPokemonList] = React.useState<PokemonListArray>([])
  const setSearchValue = useSearchHook()

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await fetch(POKEMON_URL)
      const data = await response.json()
      setPokemonList(data.results)
    }
    fetchPokemonList()
  }, [])

  // >

  console.log(pokemonList)

  return (
    <div className='App'>
      <HeaderSearchAndMenu setSearchValue={setSearchValue} />
      <main className='mainContentApp'>
        <PokemonList pokemonList={pokemonList} />
      </main>
    </div>
  )
}

export default Home
