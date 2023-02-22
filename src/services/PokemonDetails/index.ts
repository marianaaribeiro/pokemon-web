import { api } from '../api'
import { PokemonDetail } from './types'

export const fetchList = async (value: string): Promise<PokemonDetail> => {
  return (await api.get<PokemonDetail>(`${value}`)).data
}
