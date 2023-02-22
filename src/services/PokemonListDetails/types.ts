export interface RatePokemon {
  name: string
}

export interface SpeciesPokemon {
  name: string
}

export interface GroupsPokemon {
  name: string
}

export interface FormsDescription {
  description: string
}

export interface PokemonListDetail {
  form_descriptions: FormsDescription[]
  egg_groups: GroupsPokemon[]
  name: string
  evolves_from_species: SpeciesPokemon
  growth_rate: RatePokemon
}
