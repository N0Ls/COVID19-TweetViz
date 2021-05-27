import { createContext, useContext } from 'react'

export const StoreContext = createContext(undefined)

export const useStoreContext = () => {
  const context = useContext(StoreContext)

  if (context === undefined) {
    throw new Error('useStoreContext must be used within a Store provider')
  }

  return context
}
