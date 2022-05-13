import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'wouter'
import HeaderSearchAndMenu from '../../components/HeaderSearchAndMenu'
import PokemonList from '../../components/PokemonList'
import './styles.scss'

function Pokedex() {
  const [searchValue, setSearchValue] = React.useState('')
  const [, setLocation] = useLocation()
  const state = useSelector(state => state)

  useEffect(() => {
    if (searchValue) {
      setLocation(`/pokemon/${searchValue}`)
    }
    console.log(state)
  }, [searchValue])

  return (
    <div className='pokedexPage'>
      <HeaderSearchAndMenu setSearchValue={setSearchValue} />
      <h2 className='pp-title'>My Pokedex</h2>
      {state.pokemons.lenght > 0 ? (
        <PokemonList pokemonList={state.pokemons} />
      ) : (
        <p>
          Tu pokedex esta vacío ve a la página principal para agregar algunos o
          utiliza el buscador
        </p>
      )}
    </div>
  )
}

export default Pokedex
