import { ListFavoritePokemon } from './types'

export const fetchFavorites = (key: string): string | null => {
  return localStorage.getItem(key)
}

export const fetchSaveFavorites = (
  key: string,
  value: ListFavoritePokemon[]
): void | null => {
  const item = JSON.stringify(value)
  return localStorage.setItem(key, `${item}`)
}
