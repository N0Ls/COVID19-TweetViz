import { createContext, useContext } from 'react'

export const StoreDispatchContext = createContext(undefined)

export const useStoreDispatchContext = () => {
  const context = useContext(StoreDispatchContext)

  if (context === undefined) {
    throw new Error('useStoreDispatchContext must be used within a Store provider')
  }

  return context
}
