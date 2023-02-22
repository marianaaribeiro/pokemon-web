import { useState } from 'react'
import { useSkeleton } from '@/hooks/useSkeleton'
import './styles.scss'

interface ButtonProps {
  text: string
  isActive: boolean
  imgButton?: string
  isLoading?: boolean
  onClickLabel?: () => void
}

export const Buttons = ({
  text,
  isActive,
  imgButton,
  isLoading = false,
  onClickLabel,
}: ButtonProps): JSX.Element => {
  const [loading, setLoading] = useState(true)
  const [skeleton] = useSkeleton(isLoading ? isLoading : loading)

  const active = isActive ? 'is-active' : ''
  const imgLeft = imgButton ? 'is-img-left' : ''
  return (
    <>
      <button
        className={`${active} hub-btn ${skeleton()} ${imgLeft}`}
        onClick={onClickLabel}
      >
        {imgButton && (
          <img
            src={imgButton}
            data-testid="button__image"
            className="hub-imgs"
            onLoad={() => {
              setLoading(false)
            }}
          />
        )}
        {text}
      </button>
    </>
  )
}
