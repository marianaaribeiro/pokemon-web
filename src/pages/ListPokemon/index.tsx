import { useApps } from '@/contexts/AppsContext'
import './styles.scss'
import Search from 'antd/lib/input/Search'
import { useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { ITEMS_PAGE, MAX_DATA, getStoreItem, setStoreItem } from '@/helper'
import { Pagination } from 'antd'
import { ErrorPage } from '@/components/ErrorPage'
import { pokemonList, selectList } from './ListPokemonReducer'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { NotData } from '@/component/NotData'
import { PokemonCardList } from './shards/PokemonCardList'
import styles from './PokemonList.module.scss'

export default function ListPokemon(): JSX.Element {
  const [searchInput, setSearchInput] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const { isLoading, listPokemon, getListPokemon } = useApps()

  const theme = useAppSelector(selectList) || getStoreItem('list')
  console.log('teste 000', theme)
  const dispatch = useAppDispatch()

  const location = useLocation()
  const { pokemonId } = useParams()
  const page = getStoreItem('page')
  const keys = useMemo(
    () => Object.keys(localStorage),
    [Object.keys(localStorage)]
  )

  const selectedTab = useMemo(
    () =>
      location?.pathname.split('/').find((i) => ['/', 'favorites'].includes(i)),
    [location.pathname]
  )

  useEffect(() => {
    if (getListPokemon && !pokemonId) {
      getListPokemon(0, MAX_DATA)
      setSearchInput('')
      if (listPokemon) {
        dispatch(pokemonList(listPokemon))
      }
      console.log('teste 100', listPokemon)
    }
  }, [selectedTab, pokemonId])

  useEffect(() => {
    setPageNumber(Number(page))
  }, [page])

  const dataToShow = useMemo(() => {
    setStoreItem('page', '1')

    if (selectedTab?.includes('favorites')) {
      return listPokemon?.results.filter((pokemon) =>
        keys.includes(pokemon.name)
      )
    }

    return listPokemon?.results
  }, [listPokemon?.results, selectedTab])

  const filterData = useMemo(
    () => dataToShow?.filter((pokemon) => pokemon.name.startsWith(searchInput)),
    [dataToShow, searchInput]
  )

  const dataLength = useMemo(() => {
    if (selectedTab?.includes('favorites')) {
      return filterData?.filter((pokemon) => keys.includes(pokemon.name)).length
    }

    return filterData?.length
  }, [selectedTab, filterData, keys])

  const handleChange = (page: number, pageSize: number) => {
    setPageNumber(page)
    setStoreItem('page', String(page))
  }

  const onSearch = (value: string) => {
    setSearchInput(value)
    setStoreItem('page', '1')
  }

  if (pokemonId) return <Outlet />

  if (!listPokemon) {
    return <ErrorPage />
  }

  return (
    <div className="container">
      <div className="search__container">
        <Search
          placeholder="Search by pokémon name..."
          allowClear
          onSearch={onSearch}
          style={{ width: 400 }}
          enterButton
        />
        {!!searchInput && <label>Searched word is "{searchInput}"</label>}
      </div>

      <div className=" cardsContainer">
        <PokemonCardList pokemonList={filterData!} itemsPerPage={ITEMS_PAGE} />
      </div>

      {!filterData?.length && <NotData />}

      {!!filterData?.length && (
        <div className="paginationContainer ">
          <Pagination
            className=" pagination"
            defaultPageSize={20}
            total={dataLength}
            showSizeChanger={false}
            current={pageNumber}
            hideOnSinglePage
            responsive
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  )
}
