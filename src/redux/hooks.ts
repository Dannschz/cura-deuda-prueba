import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Hook para despachar las acciones
export const useAppDispatch = () => useDispatch<AppDispatch>()
// Hook para obtener el estado de la aplicación
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
