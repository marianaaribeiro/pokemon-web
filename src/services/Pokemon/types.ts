export interface ResultsPokemon {
  name: string
  url: string
}

export interface Pokemon {
  count: number
  next: string
  previous: string
  results: ResultsPokemon[]
}
