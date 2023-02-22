import { useState } from 'react'

import { useSkeleton } from '../../hooks/useSkeleton'

import './styles.scss'

interface CardPartnerProps {
  image: string
  title: string
  description: string
  isLoading?: boolean
  buttonLabel?: string
  handleClick?: () => void
}

export const CardPartner = ({
  image,
  title,
  description,
  isLoading = false,
  buttonLabel,
  handleClick,
}: CardPartnerProps): JSX.Element => {
  const [loading, setLoading] = useState(true)

  const [skeleton] = useSkeleton(isLoading ? isLoading : loading)

  const isImage = buttonLabel ? 'card-partner__img-list' : 'card-partner__img'
  const isTitle = buttonLabel ? 'text-hub-body mb-1.5' : 'text-hub-primary mb-3'

  const classCard = (): string => {
    const isList = buttonLabel ? 'card-partner__border' : ''

    return `card-partner ${skeleton('pulse')} ${isList}`
  }

  return (
    <div className={` ${classCard()}`}>
      <div className="flex items-start">
        <div
          className={`${isImage}  ${skeleton()}`}
          style={{ backgroundImage: `url(${image})` }}
          data-testid="card-partner__image"
        >
          {loading && (
            <img
              className="absolute invisible"
              onLoad={() => {
                setLoading(false)
              }}
              src={image}
            />
          )}
        </div>

        <div className="px-6 flex-1">
          <div className={`card-partner__title ${isTitle} ${skeleton()}`}>
            {title}
          </div>
          <div className={`card-partner__description ${skeleton()}`}>
            {description}
          </div>
          {buttonLabel && (
            <div
              className={`card-partner__partner-link ${skeleton()}`}
              onClick={handleClick}
            >
              {buttonLabel}
              <svg
                className="mt-1 ml-1"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                  className="fill-hub-primary"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
