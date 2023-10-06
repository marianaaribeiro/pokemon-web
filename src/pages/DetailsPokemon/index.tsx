import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './styles.scss'
import { useApps } from '@/contexts/AppsContext'
import { LIST_URLS } from '@/helper'
import { PokemonAbilities } from '@/component/PokemonAbilities'
import { PokemonType } from '@/component/PokemonType'
import { PokemonSprites } from '@/component/PokemonSprites'
import { BaseStats } from '@/component/BaseStats'
import { Moves } from '@/component/Moves'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import {
  faAngleLeft,
  faStar as faStarFavorited,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DetailsPokemon(): JSX.Element {
  const { pokemonId } = useParams()
  const navigate = useNavigate()
  const { pokemonDetails, getPokemonDetails } = useApps()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (getPokemonDetails) {
      getPokemonDetails(pokemonId!)
    }
  }, [pokemonId])

  useEffect(() => {
    const storedPokemonId = localStorage.getItem(pokemonDetails?.name!)
    if (!!storedPokemonId) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }, [pokemonDetails])

  const pokemonNum = `Nº${pokemonId?.padStart(3, '0')}`

  const handleFavorite = () => {
    const storedPokemonId = localStorage.getItem(pokemonDetails?.name!)

    if (storedPokemonId === String(pokemonDetails?.id)) {
      localStorage.removeItem(pokemonDetails?.name!)
      setIsFavorite(false)
    } else {
      localStorage.setItem(pokemonDetails?.name!, String(pokemonDetails?.id!))
      setIsFavorite(true)
    }
  }

  const isFavoritePokemon = () => {
    if (isFavorite) {
      return { icon: faStarFavorited, color: 'gold' }
    }

    return { icon: faStar, color: '#212121' }
  }

  const handleGoBack = () => navigate(-1)

  return (
    <div className="pokemonDetails">
      <div className="title">
        <div className="backIcon" onClick={handleGoBack}>
          <FontAwesomeIcon icon={faAngleLeft} size="1x" />
          <span>Back</span>
        </div>
        <h1>{pokemonDetails?.name}</h1>
        <h1 style={{ color: '#616161' }}>{pokemonNum}</h1>
        <div className="favoriteIcon__container" onClick={handleFavorite}>
          <FontAwesomeIcon size="2x" {...isFavoritePokemon()} />
        </div>
      </div>
      <div className="imgContainer">
        <img
          src={LIST_URLS.sprite.replace('pokemonId', pokemonId!)}
          alt={pokemonId}
        />

        <div className="sideInfo">
          <PokemonAbilities abilities={pokemonDetails?.abilities!} />

          <PokemonType typesList={pokemonDetails!} />

          <PokemonSprites pokemonSprites={pokemonDetails?.sprites!} />
        </div>

        <BaseStats baseStats={pokemonDetails?.stats!} />

        <Moves moves={pokemonDetails?.moves!} />
      </div>
    </div>
  )
}
