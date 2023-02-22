import { render, screen } from '@testing-library/react'

import { Spinner } from '../../../components/Spinner'

describe('Spinner.tsx', () => {
  test('Should declare the text when rendering the component', () => {
    render(<Spinner />)
    const text = screen.getByText('Loading...')
    expect(text).toBeInTheDocument()
  })
  test('should check if h-screen class exists when spinner is active', () => {
    render(<Spinner hScreen={true} />)
    const spinner = screen.getByTestId('spinner__h-screen')
    expect(spinner).toHaveClass('h-screen')
  })
})
