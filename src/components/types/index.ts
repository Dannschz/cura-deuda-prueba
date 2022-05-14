/* Estas interfaces son para los tipos de datos que se usan en los componentes 
y tienen el mismo nombre de la información que viene de la API */

export type Stat = {
  name: string
  url: string
}

export type PokemonStat = {
  base_stat: number
  stat: Stat
}

export type Stats = Array<PokemonStat>

type Ability = {
  ability: {
    name: string
    url: string
  }
}

export type Abilities = Array<Ability>

type Move = {
  move: {
    name: string
    url: string
  }
}

export type Moves = Array<Move>

type Type = {
  type: {
    name: string
  }
}

export type Types = Array<Type>

export interface Pokemon {
  name: string
  id: string
  sprites: {
    other: {
      home: {
        front_default: string
      }
    }
  }
  stats: Stats
  height: number
  weight: number
  abilities: Abilities
  moves: Moves
  types: Types
}

export type PokemonListArray = Array<{ name: string; url: string }>

export type FlavorText = {
  flavor_text: string
  language: {
    name: string
  }
}

export type FlavorTextEntries = Array<FlavorText>
