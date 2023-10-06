import { AbilityPokemon } from '@/services/types'
import '../../pages/DetailsPokemon/styles.scss'

type Props = {
  abilities: Array<AbilityPokemon>
}
/* 
import './styles.scss' */

export const PokemonAbilities = ({ abilities }: Props): JSX.Element => {
  const isHiddenAbility = (ability: AbilityPokemon) => {
    if (ability.is_hidden) {
      return 'hiddenAbility'
    }

    return ''
  }

  return (
    <div className="abilitiesContainer">
      <span>Abilities:</span>
      {abilities?.map((ability) => (
        <span key={ability.ability.name} className={isHiddenAbility(ability)}>
          {ability.ability.name}
        </span>
      ))}
    </div>
  )
}
