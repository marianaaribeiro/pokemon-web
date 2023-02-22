import { api } from '../api'
import { PokemonListOtherDetail } from './types'

export const fetchOtherDetails = async (
  value: string
): Promise<PokemonListOtherDetail> => {
  return (await api.get<PokemonListOtherDetail>(`pokemon/${value}`)).data
}
