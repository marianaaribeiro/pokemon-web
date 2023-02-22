export interface ListFavoritePokemon {
  imgPokemon: string | null
  name: string | null
}

export interface Favorites {
  list: ListFavoritePokemon[] | undefined
}
