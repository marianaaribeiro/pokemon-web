import {
  PokemonDetails,
  PokemonTypeDetails,
  TypesColors,
} from '@/services/types'
import '../../pages/DetailsPokemon/styles.scss'

type Props = {
  typesList: PokemonDetails
}

/* import './styles.scss' */

export const PokemonType = ({ typesList }: Props): JSX.Element => {
  return (
    <div className="pokemonTypes">
      {typesList?.types.map((type) => (
        <span
          key={type.slot}
          className="pokemonTypes__individual"
          style={{
            backgroundColor:
              TypesColors[type.type.name as keyof PokemonTypeDetails],
          }}
        >
          {type.type.name}
        </span>
      ))}
    </div>
  )
}
