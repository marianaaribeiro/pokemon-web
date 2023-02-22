import { render, screen, fireEvent } from '@testing-library/react'

import { ErrorPage } from '../../../components/ErrorPage'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('ErrorPage.tsx', () => {
  test('Asserts heading text', () => {
    render(<ErrorPage />)

    const heading = screen.getByTestId('page-error__heading')
    expect(heading.textContent).toEqual('Desculpe, nós erramos!')
  })

  test('Asserts description text', () => {
    render(<ErrorPage />)

    const description = screen.getByTestId('page-error__description')
    expect(description.textContent).toEqual(
      'Não conseguimos identificar a página'
    )
  })

  test('Asserts button text', () => {
    render(<ErrorPage />)

    const button = screen.getByRole('button')
    expect(button.textContent).toEqual('Voltar para home')
  })

  test('when prop isLoading is true should exists class is-skeleton', () => {
    render(<ErrorPage isLoading={true} />)
    const heading = screen.getByTestId('page-error__heading')
    expect(heading).toHaveClass('is-skeleton')

    const description = screen.getByTestId('page-error__description')
    expect(description).toHaveClass('is-skeleton')

    const icon = screen.getByTestId('page-error__icon')
    expect(icon).toHaveClass('is-skeleton')

    const button = screen.getByTestId('page-error__button')
    expect(button).toHaveClass('is-skeleton')
  })

  test('when button is clicked and exists callback props then callback function should be called', () => {
    const mockFunction = jest.fn()
    render(<ErrorPage callback={mockFunction} />)

    const button = screen.getByText('Voltar para home')
    fireEvent.click(button)
    expect(mockFunction).toHaveBeenCalled()
  })
})
