import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { Pokemon } from '@/services/Pokemon/types'
import { fetchPokemon } from '@/services/Pokemon'

interface AppsContextData {
  home: Pokemon
}

interface AppsProviderProps {
  children: ReactNode
}

const AppsStateContext = createContext({} as AppsContextData)

AppsStateContext.displayName = 'AppsStateContext'

export const AppsProvider = ({ children }: AppsProviderProps): JSX.Element => {
  const [home, setHome] = useState<Pokemon>(null!)
  const [success, setSuccess] = useState(false)
  const params = {
    value: 8,
  }

  useEffect(() => {
    if (!success) {
      fetchPokemon(params.value)
        .then((response) => {
          setHome(response)
          setSuccess(true)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    document.body.classList.add('light')
  }, [])

  return (
    <AppsStateContext.Provider value={{ home }}>
      {children}
    </AppsStateContext.Provider>
  )
}

export const useApps: () => AppsContextData = () => useContext(AppsStateContext)
