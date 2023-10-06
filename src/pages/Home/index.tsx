import { Outlet } from 'react-router-dom'
import { Header } from './shards/Header'
import './styles.scss'

export default function Home(): JSX.Element {
  return (
    <div className="page-home">
      <Header text="Pokemon" hasFavorite />
      <div className="page-home__children">
        <Outlet />
      </div>
    </div>
  )
}
