import { useEffect, useReducer } from 'react'

export const usePersistedReducer = (
  reducer,
  initialState,
  init,
  key,
  storage,
) => {
  const [state, dispatch] = useReducer(
    reducer,
    storage.get(key, initialState),
    init,
  )

  useEffect(() => {
    storage.set(key, state)
  }, [state, storage, key])

  return [state, dispatch]
}
