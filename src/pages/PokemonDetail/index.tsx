/* import React, { useEffect } from 'react'
import HeaderSearchAndMenu from '../../components/HeaderSearchAndMenu'
import PokemonAbilities from '../../components/PokemonAbilities'
import PokemonDetailLeft from '../../components/PokemonDetailLeft'
import PokemonFeatures from '../../components/PokemonFeatures'
import PokemonStats from '../../components/PokemonStats'
import { Pokemon } from '../../components/types' */
// import useSearchHook from '../../hooks/useSearchHook'
import './styles.scss'

interface PokemonDetailsProps {
  params: { name: string } // la propiedad params viene de la url en PokemonCard
}

// Contiene la información del pokemon
function PokemonDetail({ params }: PokemonDetailsProps) {
  // const setSearchValue = useSearchHook()
  // const [pokemonDetail, setPokemonDetail] = React.useState<Pokemon>()

  /* useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
      )
      const data = await response.json()
      setPokemonDetail(data)
    }
    getPokemon()
    console.log(pokemonDetail)
  }, [params.name]) */

  return (
    <>
    
    </>
  )
}

export default PokemonDetail
