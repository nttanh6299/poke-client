import {
  TypedUseSelectorHook,
  useDispatch as useRDispatch,
  useSelector as useRSelector,
} from 'react-redux'
import type { RootState, AppDispatch } from 'app/store'

export const useDispatch = () => useRDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useRSelector
