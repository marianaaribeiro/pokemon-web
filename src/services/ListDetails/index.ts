import { api } from '../api'
import { PokemonDetails } from '../types'

export const fetchListDetails = async (
  urlListPokemon: string
): Promise<PokemonDetails> => {
  return (await api.get<PokemonDetails>(`${urlListPokemon}`)).data
}
