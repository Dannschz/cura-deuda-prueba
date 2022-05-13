import { Pokemon } from '../types'
import './styles.scss'

interface PokemonDetailLeftProps {
  pokemon: Pokemon | undefined
}

function PokemonDetailLeft({ pokemon }: PokemonDetailLeftProps) {
  return (
    <div className='pd-left'>
      <h2 className='pd-title'>{pokemon?.name}</h2>
      <button className='pdl-add-btn' type='button'>
        Add to Pokedex
      </button>
      <img
        className='pd-image'
        src={pokemon?.sprites.other.home.front_default}
        alt={pokemon?.name}
      />
      <p className='atrribute pdl-height'>Altura: {pokemon?.height}</p>
      <p className='atrribute pdl-weight'>Peso: {pokemon?.weight}</p>
    </div>
  )
}

export default PokemonDetailLeft
