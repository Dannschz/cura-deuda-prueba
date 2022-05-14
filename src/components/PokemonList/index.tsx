import PokemonCard from '../PokemonCard'
import { PokemonListArray } from '../types'
import './styles.scss'

interface PokemonListProps {
  pokemonList: PokemonListArray
  marginTop?: string
}

function PokemonList({ pokemonList, marginTop }: PokemonListProps) {
  return (
    <div className='pokemonList' style={{ marginTop }}>
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
