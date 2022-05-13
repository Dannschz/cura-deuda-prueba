import { Abilities } from "../types"
import Ability from "../Ability"
import "./styles.scss"

interface PokemonAbilitiesProps {
  abilities: Abilities
}

function PokemonAbilities({ abilities }: PokemonAbilitiesProps) {
  return (
    <div className="pokemonAbilitiesCard">
      <h2 className="pa-title">Habilidades</h2>
      {abilities.map(({ ability }) => {
        return (
          <Ability key={ability.url} name={ability.name} url={ability.url} />
        )
      })}
    </div>
  )
}

export default PokemonAbilities
