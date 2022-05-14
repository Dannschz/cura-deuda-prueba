import { useAppDispatch } from '../../redux/hooks'
import { Pokemon } from '../types'
import { catchPokemon } from '../../redux/Slices/pokemonList'
import './styles.scss'
/* import InfoMessage from '../InfoMessage'
import { useState } from 'react' */

interface PokemonDetailLeftProps {
  pokemon: Pokemon | undefined
}

function PokemonDetailLeft({ pokemon }: PokemonDetailLeftProps) {
  const dispatch = useAppDispatch()
  /* const [showMessage, setShowMessage] = useState({
    show: false,
    message: '',
  }) */

  const handleAddPokemon = () => {
    if (pokemon) {
      dispatch(catchPokemon(pokemon))
      /* setShowMessage({
        show: true,
        message: `${pokemon.name} se agrego al Pokedex`,
      }) */
    }
  }

  return (
    <div className='pd-left'>
      <h2 className='pd-title'>{pokemon?.name}</h2>
      <button className='pdl-add-btn' type='button' onClick={handleAddPokemon}>
        Add to Pokedex
      </button>
      <img
        className='pd-image'
        src={pokemon?.sprites.other.home.front_default}
        alt={pokemon?.name}
      />
      <p className='atrribute pdl-height'>Altura: {pokemon?.height}</p>
      <p className='atrribute pdl-weight'>Peso: {pokemon?.weight}</p>
      {/* Trate de agregar un mensaje cuando se agrega el pokemon pero fallé :( */}
      {/* {showMessage.show && (
        <InfoMessage message={showMessage.message} setState={setShowMessage} />
      )} */}
    </div>
  )
}

export default PokemonDetailLeft
