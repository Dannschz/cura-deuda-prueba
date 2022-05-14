import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'

export default function useSearchHook() {
  const [searchValue, setSearchValue] = useState('')
  const [, setLocation] = useLocation()

  useEffect(() => {
    // cada que cambie el valor de searchValue, cambiar la ruta con el nombre del pokemon y traer la info del pokemon
    if (searchValue) {
      setLocation(`/pokemon/${searchValue}`)
    }
  }, [searchValue])

  return setSearchValue
}
