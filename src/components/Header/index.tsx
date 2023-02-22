import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Buttons } from '../Buttons'
import favorite from '../../assets/icons/favorite.svg'

import './styles.scss'
interface HeaderProps {
  text: string
  hasNavigate?: boolean
  hasFavorite?: boolean
}
export const Header = ({
  text,
  hasNavigate,
  hasFavorite,
}: HeaderProps): JSX.Element => {
  const navigate = useNavigate()
  const [filterActive, setFilterActive] = useState<number>(0)

  const handleBack = (): void => {
    navigate(-1)
  }

  useEffect(() => {
    setFilterActive(0)
  }, [])

  const clickButton = (): void => {
    setFilterActive(1)
    navigate('/favorite')
  }

  const isMenu = hasFavorite ? 'is-favorite' : 'is-no-favorite'

  return (
    <div className={`header ${isMenu}`}>
      {hasNavigate && (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          onClick={handleBack}
          data-testid="header__svg"
          className="absolute left-4"
        >
          <path
            d="M17.0019 3.80085C16.5119 3.31085 15.7219 3.31085 15.2319 3.80085L6.92189 12.1108C6.53189 12.5008 6.53189 13.1308 6.92189 13.5208L15.2319 21.8308C15.7219 22.3208 16.5119 22.3208 17.0019 21.8308C17.4919 21.3408 17.4919 20.5508 17.0019 20.0609L9.76189 12.8108L17.0119 5.56085C17.4919 5.08085 17.4919 4.28085 17.0019 3.80085Z"
            className="fill-hub-primary"
          />
        </svg>
      )}
      <span>{text}</span>
      {hasFavorite && (
        <div className="container-btn">
          <Buttons
            text="Lista de Favoritos"
            imgButton={favorite}
            isActive={filterActive === 1}
            onClickLabel={() => clickButton()}
          />
        </div>
      )}
    </div>
  )
}
