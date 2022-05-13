import { useEffect, useState } from 'react'
import { FlavorTextEntries } from '../types'
import closeIcon from '../../assets/img/close.svg'
import './styles.scss'

interface PokemonMoveModalProps {
  urlMove: string
  closeModal: () => void
}

function PokemonMoveModal({ urlMove, closeModal }: PokemonMoveModalProps) {
  const [moveDesc, setMoveDesc] = useState('')

  useEffect(() => {
    const getMove = async (url: string) => {
      const response = await fetch(url)
      const data: { flavor_text_entries: FlavorTextEntries } =
        await response.json()
      const flavorText = data.flavor_text_entries.find(flavorText => {
        return flavorText.language.name === 'es'
      })
      setMoveDesc(flavorText?.flavor_text ?? '')
    }
    getMove(urlMove)
  }, [urlMove])

  return (
    <div className='pokemonMoveModal'>
      <button className='pmm-close-btn' onClick={closeModal}>
        <img src={closeIcon} alt='close' width={24} height={24} />
      </button>
      <h2 className='pmm-title'>Move</h2>
      <p className='pmm-desc'>{moveDesc}</p>
    </div>
  )
}

export default PokemonMoveModal
