import { useEffect, useMemo, useState } from 'react'
import { Buttons } from '@/components/Buttons'
import { useSkeleton } from '@/hooks/useSkeleton'
import { ErrorPage } from '@/components/ErrorPage'
import { fetchDetail } from '@/services/PokemonListDetails'
import { PokemonListDetail } from '@/services/PokemonListDetails/types'
import { CardPartner } from '@/components/CardPartner'
import { CardInfo } from '@/components/CardInfo'
import { fetchOtherDetails } from '@/services/PokemonListOtherDetails'
import { PokemonListOtherDetail } from '@/services/PokemonListOtherDetails/types'
import favorite from '../../../../assets/icons/favorite.svg'
import { fetchFavorites, fetchSaveFavorites } from '@/services/Favorites'
import { ListFavoritePokemon } from '@/services/Favorites/types'
import './styles.scss'

interface DetailListProps {
  namePokemon: string
  imgs: string
}

export const DetailList = ({
  namePokemon,
  imgs,
}: DetailListProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [details, setDetail] = useState<PokemonListDetail>(null!)
  const [otherDetails, setOtherDetail] = useState<PokemonListOtherDetail>(null!)
  const [saveFavorite, setFavorite] = useState<boolean>(false)
  let list: any
  const [skeleton] = useSkeleton(loading)

  useEffect(() => {
    onFetchDetail(namePokemon)
    onFetchOtherDetails(namePokemon)
  }, [])
  useEffect(() => {
    setLoading(true)
    list = fetchFavorites('listPokemon')
    const filterList = JSON.parse(list).filter(
      (item: ListFavoritePokemon) => item?.name === details?.name
    )
    const namePokemons = filterList.filter(
      (item: ListFavoritePokemon) => item?.name
    )

    if ((namePokemons && filterList[0]?.name) === (details && details?.name)) {
      setFavorite(true)
      setLoading(false)
    } else {
      setLoading(false)
    }
  })

  const onFetchDetail = (url: string): void => {
    fetchDetail(url)
      .then((response) => {
        setDetail(response)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      })
  }

  const onFetchOtherDetails = (name: string): void => {
    fetchOtherDetails(name)
      .then((response) => {
        setOtherDetail(response)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      })
  }

  const handleSaveFavorite = (): void => {
    const item = {
      imgPokemon: otherDetails?.sprites?.front_default,
      name: details?.name,
    }

    fetchSaveFavorites('listPokemon', [...JSON.parse(list), item])
    setFavorite(true)
  }

  const resourse = useMemo(() => {
    return {
      CardPartner: {
        description:
          details?.form_descriptions[0]?.description ||
          'No momento não tem descrição',
      },
      cardInfo: {
        experienceTitle: 'Experiência',
        heightTitle: 'Altura',
        weightTitle: 'Peso',
      },
      listProgress: [
        { title: 'Hp' },
        { title: 'Ataque' },
        { title: 'Defesa' },
        { title: 'Ataque Especial' },
        { title: 'Defesa Especial' },
        { title: 'Velocidade' },
      ],
    }
  }, [])

  const listName = [
    {
      value: details?.growth_rate?.name
        ? 'Medium Slow'
        : details?.growth_rate?.name,
      title: 'Rate',
    },
    {
      value: details?.egg_groups.map((item) => item?.name),
      title: 'Grupo',
    },
    {
      value: details?.evolves_from_species?.name
        ? details?.evolves_from_species?.name
        : 'Não encontrado',
      title: 'Espécie',
    },
  ]

  if (error) return <ErrorPage />
  return (
    <div className={`detail-list ${skeleton('pulse')}`}>
      <div>
        <CardPartner
          isLoading={loading}
          image={imgs}
          title={details?.name}
          description={resourse.CardPartner.description}
        />
      </div>
      <div className="mt-4 ml-6">
        <Buttons
          text={saveFavorite === true ? 'Curtiu' : 'Curtir'}
          isActive={false}
          isLoading={loading}
          onClickLabel={() => {
            handleSaveFavorite()
          }}
          imgButton={
            saveFavorite === false
              ? otherDetails?.sprites?.front_default
              : favorite
          }
        />
      </div>
      <div className="flex">
        <div className="flex-none w-3/12 h-14">
          <CardInfo
            isLoading={loading}
            title={resourse.cardInfo.heightTitle}
            description={otherDetails?.height}
          />
        </div>
        <div className="grow h-14 ">
          <CardInfo
            title={resourse.cardInfo.experienceTitle}
            description={otherDetails?.base_experience}
          />
        </div>
        <div className="flex-none w-3/12 h-14">
          <CardInfo
            title={resourse.cardInfo.weightTitle}
            description={otherDetails?.weight}
          />
        </div>
      </div>
      <div className="mt-10 pt-1 w-full">
        <div className="mt-2">
          {resourse.listProgress[0].title}: {otherDetails?.stats[0]?.base_stat}
          <div
            style={{
              width: `${otherDetails?.stats[0]?.base_stat}%`,
            }}
            className="gradients"
          ></div>
        </div>
        <div className="mt-2">
          {resourse.listProgress[1].title}: {otherDetails?.stats[1]?.base_stat}
          <div
            style={{
              width: `${otherDetails?.stats[1]?.base_stat}%`,
            }}
            className="gradients"
          ></div>
        </div>
        <div className="mt-2">
          {resourse.listProgress[2].title}: {otherDetails?.stats[2]?.base_stat}
          <div
            style={{
              width: `${otherDetails?.stats[2]?.base_stat}%`,
            }}
            className="gradients"
          ></div>
        </div>
        <div className="mt-2">
          {resourse.listProgress[3].title}: {otherDetails?.stats[3]?.base_stat}
          <div
            style={{
              width: `${otherDetails?.stats[3]?.base_stat}%`,
            }}
            className="gradients"
          ></div>
        </div>
        <div className="mt-2">
          {resourse.listProgress[4].title}: {otherDetails?.stats[4]?.base_stat}
          <div
            style={{
              width: `${otherDetails?.stats[4]?.base_stat}%`,
            }}
            className="gradients"
          ></div>
        </div>
        <div className="mt-2">
          {resourse.listProgress[5].title}: {otherDetails?.stats[5]?.base_stat}
          <div
            style={{
              width: `${otherDetails?.stats[5]?.base_stat}%`,
            }}
            className="gradients"
          ></div>
        </div>
      </div>

      <div className="flex">
        <div className="flex-none w-3/12 h-14">
          <CardInfo
            isLoading={loading}
            title={listName[0].title}
            description={listName[0].value}
          />
        </div>
        <div className="grow h-14 ">
          <CardInfo title={listName[1].title} description={listName[1].value} />
        </div>
        <div className="flex-none w-3/12 h-18">
          <CardInfo title={listName[2].title} description={listName[2].value} />
        </div>
      </div>
    </div>
  )
}
