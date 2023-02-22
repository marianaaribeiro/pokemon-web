import { Header } from '@/components/Header'
import { fetchFavorites, fetchSaveFavorites } from '@/services/Favorites'
import { ListFavoritePokemon } from '@/services/Favorites/types'
import { useCallback, useEffect, useState } from 'react'
import './styles.scss'

export default function Favorite(): JSX.Element {
  const [listTable, setListTable] = useState<any | undefined>([])

  useEffect(() => {
    const list: any = fetchFavorites('listPokemon')
    setListTable(JSON.parse(list))
  }, [])

  const handleRemoveItem = useCallback(
    (itemFavorite: any) => {
      const newList: any = [...listTable]
      const item: any = itemFavorite
      newList.splice(listTable.indexOf(item), 1)
      setListTable(newList)
      fetchSaveFavorites('listPokemon', newList)
    },
    [listTable]
  )

  return (
    <div className="page-favorite">
      <Header text="Lista de Favoritos" hasNavigate />

      <table className="table-auto w-full ">
        <thead className="text-hub-btn-primary h-14  bg-gradient-to-r from-green-400 to-blue-500">
          <tr>
            <th>Pokemon</th>
            <th>Name</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {listTable &&
            listTable?.map((item: ListFavoritePokemon, id: number) => (
              <tr key={id} className="tableList">
                <td className="w-3/12">
                  <img src={item?.imgPokemon} alt="pokemon" />
                </td>
                <td className="w-3/6  ">{item?.name}</td>
                <td className="w-3/12 ">
                  <div
                    className="buttonClose"
                    onClick={() => handleRemoveItem(item)}
                  >
                    X
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
