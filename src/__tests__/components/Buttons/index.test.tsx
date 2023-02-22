import { fireEvent, render, screen } from '@testing-library/react'

import { Buttons } from '../../../components/Buttons'

describe('Buttons.tsx', () => {
  test('Should declare the text when rendering the component', () => {
    render(<Buttons text="Todos" isActive={true} onClickLabel={jest.fn()} />)
    const textButton = screen.getByText('Todos')
    expect(textButton).toBeInTheDocument()
  })
  test('when clicking on the button the function should  be called', async () => {
    const mockFunction = jest.fn()
    render(<Buttons text="Todos" isActive={true} onClickLabel={mockFunction} />)
    const textButton = screen.getByText('Todos')
    await fireEvent.click(textButton)
    expect(mockFunction).toHaveBeenCalled()
  })
  test('should check if there is no is-active class when button is inactive', () => {
    render(<Buttons text="Todos" isActive={false} onClickLabel={jest.fn()} />)
    const textButton = screen.getByText('Todos')
    expect(textButton).not.toHaveClass('is-active')
  })
})
