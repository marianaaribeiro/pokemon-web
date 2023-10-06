import { useEffect, useState } from 'react'
import './styles.scss'
import { GenericInfo } from '../../../../services/types'
import { PokemonCard } from '../../../../component/PokemonCard'
import { getStoreItem } from '../../../../helper'

type Props = {
  pokemonList: GenericInfo[]
  itemsPerPage: number
}

export const PokemonCardList = ({
  pokemonList,
  itemsPerPage,
}: Props): JSX.Element => {
  const [data, setData] = useState<Array<GenericInfo>>([])
  const page = getStoreItem('page')

  useEffect(() => {
    const offset = Number(page) * itemsPerPage - itemsPerPage
    const newData = pokemonList?.slice(offset, offset + 20)

    setData(newData)
  }, [page, pokemonList, itemsPerPage])

  return (
    <>
      {data?.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.name} />
      ))}
    </>
  )
}
