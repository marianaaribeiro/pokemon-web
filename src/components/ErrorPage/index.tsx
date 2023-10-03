import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Buttons } from '../Buttons'
import { useSkeleton } from '@/hooks/useSkeleton'

import './styles.scss'

interface ErrorPageProps {
  callback?: () => void
  isLoading?: boolean
  isHome?: boolean
}

export const ErrorPage = ({
  callback,
  isLoading,
}: ErrorPageProps): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [skeleton] = useSkeleton(loading)

  useEffect(() => {
    setLoading(isLoading || false)
  }, [isLoading])

  return (
    <div className={`page-error ${skeleton('pulse')}`}>
      <div className="text-center w-full">
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={skeleton()}
          data-testid="page-error__icon"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0375 59.8027C8.54586 59.8027 5.74586 54.9319 7.99169 51.0527L29.9542 13.1069C32.2 9.22772 37.8 9.22772 40.0459 13.1069L62.0084 51.0527C64.2542 54.9319 61.4542 59.8027 56.9625 59.8027H13.0375ZM56.9625 53.9694L35 16.0236L13.0375 53.9694H56.9625ZM32.0834 30.6361V36.4694C32.0834 38.0736 33.3959 39.3861 35 39.3861C36.6042 39.3861 37.9167 38.0736 37.9167 36.4694V30.6361C37.9167 29.0319 36.6042 27.7194 35 27.7194C33.3959 27.7194 32.0834 29.0319 32.0834 30.6361ZM37.9167 51.0527V45.2194H32.0834V51.0527H37.9167Z"
            fill="#797979"
          />
        </svg>

        <h2
          className={`page-error__heading ${skeleton()}`}
          data-testid="page-error__heading"
        >
          Desculpe, não achamos <br />
          dados vindo da api!
        </h2>

        <p
          className={`text-sm ${skeleton()}`}
          data-testid="page-error__description"
        >
          Identificaremos o ocorrido, por favor sigas as instruções:
        </p>

        <ul
          className={`text-sm ${skeleton()}`}
          data-testid="page-error__description"
        >
          <li> - Verifique se sua conexão de internet está lenta! </li>
          <li> - Troque para uma internet estável! </li>
          <li> - Atualize a página para saber se o problema continua! </li>
        </ul>

        <div
          className={`mt-10 flex flex-col ${skeleton()}`}
          data-testid="page-error__button"
        >
          <div className="page-error__btn" onClick={() => location.reload()}>
            Tentar novamente
          </div>
        </div>
      </div>
    </div>
  )
}
