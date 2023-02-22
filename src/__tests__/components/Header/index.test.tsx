import { render, screen } from '@testing-library/react'

import { Header } from '../../../components/Header'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('Header.tsx', () => {
  test('assert text', () => {
    render(<Header text="Pokemon" />)
    const text = screen.getByText('Pokemon')
    expect(text).toBeInTheDocument()
  })

  test('when not exists props hasNavigate should not be render svg', () => {
    render(<Header text="title" />)
    const element = screen.queryByTestId('header__svg')
    expect(element).not.toBeInTheDocument()
  })

  test('when exists props hasNavigate should be render svg', () => {
    render(<Header text="title" hasNavigate />)
    const element = screen.queryByTestId('header__svg')
    expect(element).toBeInTheDocument()
  })
})
