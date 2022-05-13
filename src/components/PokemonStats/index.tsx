/* eslint-disable camelcase */
import { Stats } from '../types'
import './styles.scss'

interface PokemonStatsProps {
  stats: Stats
}

function PokemonStats({ stats }: PokemonStatsProps) {
  return (
    <div className='pokemonStats'>
      <h2 className='ps-title'>Estadisticas</h2>
      <div className='statsGrid'>
        {stats.map(({ base_stat, stat }) => {
          return (
            <div className='pokemonStat' key={stat.name}>
              <span className='pokemonStatName'>{stat.name}:</span>
              <p className='pokemonStatValue'>{base_stat}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PokemonStats
