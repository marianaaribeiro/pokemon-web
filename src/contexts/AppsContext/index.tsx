import { fetchPokemon } from '@/services/Pokemon'
import { PokemonDetails, Pokemon } from '../../services/types'
import { LIST_URLS } from '../../helper'
import { createContext, ReactNode, useState, useContext } from 'react'
import { fetchListDetails } from '@/services/ListDetails'

type AppsContextProps = {
  children?: ReactNode
  listPokemon?: Pokemon
  pokemonDetails?: PokemonDetails
  isLoading: boolean
  getPokemonDetails?: (pokemonId: string) => void
  getListPokemon?: (offset?: number, limit?: number) => void
}

const initialState: AppsContextProps = {
  isLoading: false,
}

const AppsStateContext = createContext<AppsContextProps>(initialState)
AppsStateContext.displayName = 'AppsStateContext'

export const AppsProvider = ({ children }: AppsContextProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(initialState.isLoading)
  const [listPokemon, setListPokemon] = useState<Pokemon | undefined>(undefined)
  const [pokemonDetails, setPokemonDetails] = useState<
    PokemonDetails | undefined
  >(undefined)

  const getListPokemon = async (offset?: number, limit?: number) => {
    setIsLoading(true)
    let urlListPokemon = LIST_URLS.listPokemon

    if (!!limit) {
      urlListPokemon += `?offset=${offset}&limit=${limit}`
    }

    fetchPokemon(urlListPokemon)
      .then((data: Pokemon) => {
        console.log('teste', data)
        setListPokemon(data)
        setIsLoading(false)
      })
      .catch((error) => console.error(error))
  }

  const getPokemonDetails = (id: string) => {
    setIsLoading(true)

    fetchListDetails(LIST_URLS.listPokemon + id)
      .then((data: PokemonDetails) => {
        console.log('teste 1', data)
        setIsLoading(false)
        setPokemonDetails(data)
      })
      .catch((error) => console.error(error))
  }

  return (
    <AppsStateContext.Provider
      value={{
        isLoading,
        listPokemon,
        pokemonDetails,
        getListPokemon,
        getPokemonDetails,
      }}
    >
      {children}
    </AppsStateContext.Provider>
  )
}

export const useApps: () => AppsContextProps = () =>
  useContext(AppsStateContext)
