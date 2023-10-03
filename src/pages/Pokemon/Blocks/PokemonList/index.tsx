import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionTitle } from '@/components/SectionTitle'
import { Spinner } from '@/components/Spinner'
import { useSkeleton } from '@/hooks/useSkeleton'
import { Pokemon, ResultsPokemon } from '@/services/Pokemon/types'
import { CardPokemon } from '@/components/CardPokemon'
import { fetchPokemon } from '@/services/Pokemon'
import { ErrorPage } from '@/components/ErrorPage'
import './styles.scss'

interface PokemonListProps {
  list: Pokemon
}

export const PokemonList = ({ list }: PokemonListProps): JSX.Element => {
  const [fetchingPage, setFetchingPage] = useState<boolean>(false)
  const [pokemons, setPokemons] = useState<ResultsPokemon[]>(list?.results)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [pageList, setPageList] = useState<Pokemon>(list)

  const [skeleton] = useSkeleton(loading)

  const navigate = useNavigate()

  //função para navegar para outra tela
  const handleClick = (pokemons: ResultsPokemon, imgs: string): void => {
    const name: string = pokemons.name || ''
    navigate(`/detail/${name}`, { state: { name, imgs } })
  }

  const handleLoad = (index: number): void => {
    if (index === pokemons.length - 1) {
      setLoading(false)
    }
  }

  const onFetchDetail = (page: string, active: number): void => {
    setFetchingPage(true)
    fetchPokemon(page)
      .then((response) => {
        setPokemons(pokemons.concat(response?.results))
        setPageList(response)
        setFetchingPage(false)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      })
      .finally(() => {
        setFetchingPage(false)
      })
  }
  if (error) return <ErrorPage />
  return (
    <>
      {!list ? (
        <Spinner hScreen={false} />
      ) : (
        <>
          {' '}
          {error ? (
            <ErrorPage />
          ) : (
            <div className={`pokemon-list ${skeleton('pulse')}`}>
              <SectionTitle text="Lista de Pokemons" isLoading={loading} />

              <div className="grid lg:gap-x-4 gap-y-4 lg:grid-cols-8 md:gap-x-2 md:gap-y-7 md:grid-cols-5 gap-x-4  grid-cols-3 ">
                {pokemons &&
                  pokemons.map((pokemons, index) => {
                    return (
                      <CardPokemon
                        handleClick={(value) => handleClick(pokemons, value)}
                        key={`campaign-list-${index}`}
                        image={pokemons?.url}
                        title={pokemons?.name}
                        onLoad={handleLoad}
                        index={index}
                        textButton="Ver Detalhe"
                      />
                    )
                  })}
              </div>
              {fetchingPage ? (
                <Spinner hScreen={false} />
              ) : (
                <div
                  className={`pokemon-list__filter grid gap-x-2 gap-y-2 grid-cols-7 ${skeleton()}`}
                >
                  {pageList?.next !== null && (
                    <div
                      className="pokemon-list__see-more"
                      onClick={() => onFetchDetail(pageList?.next, 1)}
                    >
                      Ver Mais
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  )
}
