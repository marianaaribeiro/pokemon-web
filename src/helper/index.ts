const API_URL = 'https://pokeapi.co/api/v2'

export const LIST_URLS = {
  listPokemon: `${API_URL}/pokemon/`,
  sprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/pokemonId.png',
  pokemonTypes: `${API_URL}/types/`,
}

export const getStoreItem = (itemName: string) => localStorage.getItem(itemName)
export const setStoreItem = (itemName: string, value: string) =>
  localStorage.setItem(itemName, value)

window.onload = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  if (localStorage.theme === 'light') {
    document.documentElement.classList.add('light')
  } else {
    document.documentElement.classList.remove('light')
  }
}

// this is for max data
export const MAX_DATA = 100000

// this is for page limit in pagination
export const ITEMS_PAGE = 20
