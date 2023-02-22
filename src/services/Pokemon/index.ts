import { api } from '../api'
import { Pokemon } from './types'

export const fetchPokemon = async (
  value: number | string
): Promise<Pokemon> => {
  return (
    await api.get<Pokemon>(
      `${typeof value === 'string' ? value : `pokemon?limit=${value}&offset=0`}`
    )
  ).data
}
