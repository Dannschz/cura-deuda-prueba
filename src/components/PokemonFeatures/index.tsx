import React, { useEffect, useState } from 'react'
import PokemonMoveModal from '../PokemonMoveModal'
import { Moves, Types } from '../types'
import './styles.scss'

type FeatureType = {
  moves: Moves
  types: Types
}

interface PokemonFeaturesProps {
  features: FeatureType
}

function PokemonFeatures({ features }: PokemonFeaturesProps) {
  const [showMoveModal, setShowMoveModal] = useState(false)
  const [urlMove, setUrlMove] = useState('')

  const handleMoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // cambiar el estado del modal a true para que se renderice y establecer la url del move para pasarla al modal
    setShowMoveModal(true)
    setUrlMove(e.currentTarget.value)
  }

  useEffect(() => {
    setShowMoveModal(false)
  }, [features.moves])

  return (
    <div className='pokemonFeatures'>
      <h2 className='pf-title'>Caracteristicas</h2>
      <div className='pf-types-and-moves pf-types'>
        <h4 className='pfmat-title pft-title'>Types</h4>
        <div className='pf-list'>
          {features.types.map((type, index) => (
            <div key={index} className='pf-type'>
              <span className='pft-item'>{type.type.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='pf-types-and-moves pf-moves'>
        <h4 className='pfmat-title pfm-title'>
          Moves <p>(Click one to see details)</p>
        </h4>
        <div className='pf-list pflist-moves'>
          {features.moves.slice(0, 16).map((move, index) => (
            <div key={index} className='pf-type pftype-moves'>
              <button
                type='button'
                value={move.move.url}
                className='pft-item pfmitem-move'
                onClick={handleMoveClick}>
                {move.move.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      {showMoveModal && (
        <PokemonMoveModal
          urlMove={urlMove}
          closeModal={() => {
            setShowMoveModal(false)
          }}
        />
      )}
    </div>
  )
}

export default PokemonFeatures
