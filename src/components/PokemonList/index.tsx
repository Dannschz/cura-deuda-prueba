import PokemonCard from '../PokemonCard'
import { PokemonListArray } from '../types'
import './styles.scss'

interface PokemonListProps {
  pokemonList: PokemonListArray
}

function PokemonList({ pokemonList }: PokemonListProps) {
  return (
    <div className='pokemonList'>
      {pokemonList.map(pokemon => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        )
      })}
    </div>
  )
}

export default PokemonList
