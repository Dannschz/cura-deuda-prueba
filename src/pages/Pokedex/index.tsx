import HeaderSearchAndMenu from '../../components/HeaderSearchAndMenu'
import PokemonList from '../../components/PokemonList'
import useSearchHook from '../../hooks/useSearchHook'
import { useAppSelector } from '../../redux/hooks'
import './styles.scss'

// Contiene la lista de los pokemones en la pokedex
function Pokedex() {
  const setSearchValue = useSearchHook()
  const store = useAppSelector(state => state) // el store global

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
