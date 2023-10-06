import { useLocation, useNavigate } from 'react-router-dom'
import '../../pages/ListPokemon/styles.scss'
import { GenericInfo } from '../../services/types'
import { LIST_URLS } from '../../helper'

type Props = {
  pokemon: GenericInfo
}

export const PokemonCard = ({ pokemon }: Props): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()

  const urlSplited = pokemon.url.split('/').filter((i) => i)
  const id = urlSplited[urlSplited.length - 1]
  const imgSrc = `${LIST_URLS.sprite.replace('pokemonId', id)}`
  const stringId = `Nº ${String(id).padStart(3, '0')}`

  console.log('teste', location.hash)
  console.log('teste', location.pathname)
  console.log('teste', location.search)

  const pokemonFormatted = {
    ...pokemon,
    imgSrc,
  }

  return (
    <div
      key={pokemon.name}
      className="cardItem"
      onClick={() => navigate(`${location.pathname}${id}`)}
    >
      <img src={pokemonFormatted.imgSrc} alt={pokemon.name} />
      <div className="pokemonInfo">
        <small>{stringId}</small>
        <span>{pokemon.name}</span>
        <div className="typesContainer"></div>
      </div>
    </div>
  )
}
