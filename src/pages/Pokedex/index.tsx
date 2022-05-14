import React, { useEffect } from 'react'
import { useLocation } from 'wouter'
import HeaderSearchAndMenu from '../../components/HeaderSearchAndMenu'
import PokemonList from '../../components/PokemonList'
import { useAppSelector } from '../../redux/hooks'
import './styles.scss'

function Pokedex() {
  const [searchValue, setSearchValue] = React.useState('')
  const [, setLocation] = useLocation()
  const store = useAppSelector(state => state)

  useEffect(() => {
    if (searchValue) {
      setLocation(`/pokemon/${searchValue}`)
    }
    console.log(store)
  }, [searchValue])

  return (
    <div className='pokedexPage'>
      <HeaderSearchAndMenu setSearchValue={setSearchValue} />
      <h2 className='pp-title'>My Pokedex</h2>
      {store.pokemons.value.length > 0 ? (
        <PokemonList
          pokemonList={store.pokemons.value.map(p => ({
            name: p.name,
            url: `https://pokeapi.co/api/v2/pokemon/${p.name}`,
          }))}
          marginTop='1em'
        />
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
