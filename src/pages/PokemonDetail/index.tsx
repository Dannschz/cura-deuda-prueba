import React, { useEffect } from 'react'
import { useLocation } from 'wouter'
import HeaderSearchAndMenu from '../../components/HeaderSearchAndMenu'
import PokemonAbilities from '../../components/PokemonAbilities'
import PokemonDetailLeft from '../../components/PokemonDetailLeft'
import PokemonFeatures from '../../components/PokemonFeatures'
import PokemonStats from '../../components/PokemonStats'
import { Pokemon } from '../../components/types'
import './styles.scss'

interface PokemonDetailsProps {
  params: { name: string } // la propiedad params viene de la url en PokemonCard
}

function PokemonDetail({ params }: PokemonDetailsProps) {
  const [searchValue, setSearchValue] = React.useState('')
  const [pokemonDetail, setPokemonDetail] = React.useState<Pokemon>()
  const [, setLocation] = useLocation()

  useEffect(() => {
    if (searchValue) {
      setLocation(`/pokemon/${searchValue}`)
    }
  }, [searchValue])

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
      )
      const data = await response.json()
      setPokemonDetail(data)
    }
    getPokemon()
    console.log(pokemonDetail)
  }, [params.name])

  return (
    <>
      <HeaderSearchAndMenu setSearchValue={setSearchValue} />
      <div className='pokemonDetailContainer'>
        <PokemonDetailLeft pokemon={pokemonDetail} />
        <PokemonAbilities abilities={pokemonDetail?.abilities ?? []} />
        <PokemonStats stats={pokemonDetail?.stats ?? []} />
        <PokemonFeatures
          features={{
            moves: pokemonDetail?.moves ?? [],
            types: pokemonDetail?.types ?? [],
          }}
        />
      </div>
    </>
  )
}

export default PokemonDetail
