import React, { useEffect } from 'react'
import { FlavorTextEntries } from '../types'
import './styles.scss'

interface AbilityProps {
  name: string
  url: string
}

function Ability({ name, url }: AbilityProps) {
  const [abilityDescription, setAbilityDescription] = React.useState<string>('')

  useEffect(() => {
    const getAbilityDescription = async () => {
      // Obtiene la descripción de la habilidad
      const response = await fetch(url)
      const data: { flavor_text_entries: FlavorTextEntries } =
        await response.json() // Tipando data como un objeto con una propiedad flavor_text_entries
      const flavorText = data.flavor_text_entries.find(flavorText => {
        // Busca en el array la descripción que concuerda con el lenguaje español
        return flavorText.language.name === 'es'
      })
      setAbilityDescription(flavorText?.flavor_text ?? '')
    }
    getAbilityDescription()
  }, [])

  return (
    <div className='pa-ability'>
      <h3 className='pa-a pa-ability-name'>{name}</h3>
      <p className='pa-a pa-ability-description'>{abilityDescription}</p>
    </div>
  )
}

export default Ability
