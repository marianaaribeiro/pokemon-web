import { api } from '../api'
import { PokemonListDetail } from './types'

export const fetchDetail = async (
  value: string
): Promise<PokemonListDetail> => {
  return (await api.get<PokemonListDetail>(`pokemon-species/${value}`)).data
}
