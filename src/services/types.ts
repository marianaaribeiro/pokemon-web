export type Pokemon = {
  count: number
  next: string | null
  previous: string | null
  results: Array<GenericInfo>
}

export type PokemonDetails = {
  abilities: Array<AbilityPokemon>
  base_experience: number
  forms: Array<Pokemon>
  game_indices: Array<Game>
  height: number
  held_items: Array<GenericInfo>
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Array<Move>
  name: string
  order: number
  past_types: Array<GenericInfo>
  species: GenericInfo
  sprites: Sprite
  versions: any
  stats: Array<Stat>
  weight: number
  types: Array<PokemonType>
  isFavorite: boolean
}

export type GenericInfo = {
  name: string
  url: string
}

export type AbilityPokemon = {
  ability: GenericInfo
  is_hidden: boolean
  slot: number
}

export type Game = {
  game_index: number
  version: GenericInfo
}

export type Move = {
  move: GenericInfo
  version_group_details: Array<VersionDetail>
}

export type VersionDetail = {
  level_learned_at: number
  move_learn_method: GenericInfo
  version_group: GenericInfo
}

export type Sprite = {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
  other: any
  versions: any
}

export type Stat = {
  base_stat: number
  effort: number
  stat: GenericInfo
}

export type PokemonType = {
  slot: number
  type: GenericInfo
}

export type PokemonTypeDetails = {
  normal: string
  fighting: string
  flying: string
  poison: string
  ground: string
  rock: string
  bug: string
  ghost: string
  steel: string
  fire: string
  water: string
  grass: string
  electric: string
  psychic: string
  ice: string
  dragon: string
  dark: string
  fairy: string
}

export enum TypesColors {
  normal = '#a4acaf',
  fighting = '#d56723',
  flying = '#3dc7ef',
  poison = '#b97fc9',
  ground = '#f7de3f',
  rock = '#a38c21',
  bug = '#729f3f',
  ghost = '#7b62a3',
  steel = '#9eb7b8',
  fire = '#fd7d24',
  water = '#4592c4',
  grass = '#9bcc50',
  electric = '#eed535',
  psychic = '#f366b9',
  ice = '#51c4e7',
  dragon = '#53a4cf',
  dark = '#707070',
  fairy = '#fdb9e9',
}
