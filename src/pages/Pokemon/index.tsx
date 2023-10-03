import { Header } from '@/components/Header'
import { useApps } from '@/contexts/AppsContext'
import { SectionTitle } from '@/components/SectionTitle'
import { PokemonList } from './Blocks/PokemonList'
import { ErrorPage } from '@/components/ErrorPage'

export default function Pokemon(): JSX.Element {
  const { home } = useApps()

  return (
    <div className="page-home">
      <Header text="Pokemon" hasFavorite />
      <SectionTitle text="Página Inicial" />

      <iframe
        className="w-full aspect-video h-80 mb-6"
        src="https://www.youtube.com/embed/Qlbz1UZphTw"
        title="Abertura Pokemon"
        allow="autoplay"
      ></iframe>
      {home ? <PokemonList list={home} /> : <ErrorPage />}
    </div>
  )
}
