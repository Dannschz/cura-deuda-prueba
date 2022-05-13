import React, { useEffect } from "react"
import { Link } from "wouter"
import { Pokemon } from "../types"
import "./styles.scss"

interface PokemonCardProps {
  name: string
  url: string
}

function PokemonCard({ name, url }: PokemonCardProps) {
  const [pokemon, setPokemon] = React.useState<Pokemon>()

  useEffect(() => {
    const fetchPokemon = async () => {
      // Traer el pokemon mediante la url
      const response = await fetch(url)
      const data = await response.json()
      setPokemon(data)
    }
    fetchPokemon()
  }, [])

  return (
    <Link href={`/pokemon/${pokemon?.name}`} className="pokemonCard">
      <img
        className="pc-imgfront"
        src={pokemon?.sprites?.other.home.front_default}
        alt=""
        width={64}
        height={64}
        loading="lazy"
      />
      <h3>{name}</h3>
      {/* <span className="pc-tooltip">Click to see pokemon details</span> */}
    </Link>
  )
}

export default PokemonCard
