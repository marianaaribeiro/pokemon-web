export interface SpritesPokemon {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}
export interface FormsPokemon {
  name: string
  url: string
}

export interface PokemonDetail {
  forms: FormsPokemon[]
  sprites: SpritesPokemon
  name: string
}
