import { getStoreItem } from '@/helper'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { getTheme, selectToogle } from './toogleReducer'
import './styles.scss'

export const Toogle = (): JSX.Element => {
  const theme = useAppSelector(selectToogle) || getStoreItem('theme')
  const dispatch = useAppDispatch()

  return (
    <label className="component-toogle">
      <input
        type="checkbox"
        className="sr-only peer"
        id="checkboxToogle"
        onClick={(event) => dispatch(getTheme(event.target.checked))}
      />
      <div
        className={`__button peer  ${
          theme === 'light'
            ? 'bg-hub-page-secundary before:bg-hub-page-third before:left-0   duration-200  transition-all'
            : 'bg-hub-page-secundary before:bg-hub-page-third  before:left-12   duration-200  transition-all'
        } w-20 h-8 bg-hub-page-secundary rounded-full p-1 flex items-cente before:content-[''] before:flex before:w-6 before:h-6 before:relative before:bg-hub-page-third before:rounded-full `}
      ></div>
    </label>
  )
}
