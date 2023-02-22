export interface ListStart {
  name: string
  url: string
}

export interface ListStarts {
  base_stat: number
  effort: number
  stat: ListStart
}

export interface ListSprites {
  front_default: string
}

export interface PokemonListOtherDetail {
  name: string
  base_experience: number
  height: number
  weight: number
  sprites: ListSprites
  stats: ListStarts[]
}
