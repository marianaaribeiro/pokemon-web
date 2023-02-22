import { useEffect, useState } from 'react'
import { useSkeleton } from '@/hooks/useSkeleton'
import { fetchList } from '@/services/PokemonDetails'
import './styles.scss'

interface CardPokemonProps {
  index: number
  image: string
  title: string
  textButton?: string
  handleClick: (value: string) => void
  onLoad: (index: number) => void
}

export const CardPokemon = ({
  index,
  textButton,
  image,
  title,
  handleClick,
  onLoad,
}: CardPokemonProps): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [skeleton] = useSkeleton(loading)
  const [imgCard, setImgCard] = useState<{ name: string; imgs: string }>()

  useEffect(() => {
    onFetchDetails(image)
  }, [image])

  const onFetchDetails = (urlCard: string): void => {
    fetchList(urlCard)
      .then((response) => {
        setImgCard({
          name: response.name,
          imgs: response.sprites.front_default,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className={`card-pokemon ${skeleton()}`}>
      <div
        style={{ backgroundImage: `url(${imgCard?.imgs})` }}
        data-testid="card-pokemon__image"
        className="card-pokemon__image"
        onClick={() => handleClick(imgCard?.imgs || '')}
      />

      {loading && (
        <img
          className="absolute invisible"
          onLoad={() => {
            onLoad(index)
            setLoading(false)
          }}
          src={imgCard?.imgs}
        />
      )}
      <span>{title}</span>

      {textButton && (
        <div
          className="card-pokemon__button"
          onClick={() => handleClick(imgCard?.imgs || '')}
        >
          {textButton}
        </div>
      )}
    </div>
  )
}
