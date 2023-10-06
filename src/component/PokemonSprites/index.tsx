import { Sprite } from '@/services/types'
import '../../pages/DetailsPokemon/styles.scss'

type Props = {
  pokemonSprites: Sprite
}

/* import './styles.scss' */

export const PokemonSprites = ({ pokemonSprites }: Props): JSX.Element => {
  if (!pokemonSprites) return <></>

  return (
    <div className="sprites__container">
      <span>Other Sprites</span>
      <div className="sprites__sprites">
        {Object.keys(pokemonSprites).map((key, index) => {
          const imgSrc = pokemonSprites[String(key) as keyof Sprite]
          if (!!imgSrc && typeof imgSrc !== 'object')
            return <img key={imgSrc} src={imgSrc} />
          return <></>
        })}
      </div>
    </div>
  )
}
