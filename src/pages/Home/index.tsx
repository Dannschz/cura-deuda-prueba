import React, { useEffect } from 'react'
import { useLocation } from 'wouter'
import HeaderSearchAndMenu from '../../components/HeaderSearchAndMenu'
import PokemonList from '../../components/PokemonList'
import { PokemonListArray } from '../../components/types'
import './styles.scss'

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/'

function Home() {
  const [searchValue, setSearchValue] = React.useState('')
  const [, setLocation] = useLocation()
  const [pokemonList, setPokemonList] = React.useState<PokemonListArray>([])

  useEffect(() => {
    if (searchValue) {
      setLocation(`/pokemon/${searchValue}`)
    }
  }, [searchValue])

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await fetch(POKEMON_URL)
      const data = await response.json()
      setPokemonList(data.results)
    }
    fetchPokemonList()
  }, [])

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
