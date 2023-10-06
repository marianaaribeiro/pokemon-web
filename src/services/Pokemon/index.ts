import { api } from '../api'
import { Pokemon } from '../types'

export const fetchPokemon = async (
  urlListPokemon: string
): Promise<Pokemon> => {
  return (await api.get<Pokemon>(`${urlListPokemon}`)).data
}
