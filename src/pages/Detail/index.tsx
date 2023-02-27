import { useLocation } from 'react-router-dom'
import { Header } from '@/components/Header'
import { DetailList } from './Blocks/DetailList'

export default function Detail(): JSX.Element {
  const { state } = useLocation()
  const formPokemon: any = state.name || ''
  const image: any = state.imgs || ''

  return (
    <div className="page-detail">
      <Header text="Detalhe do Pokemon" hasNavigate />
      <DetailList namePokemon={formPokemon} imgs={image} />
    </div>
  )
}
