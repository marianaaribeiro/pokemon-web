import { CardPokemon } from '@/components/CardPokemon'
import { fireEvent, render, screen } from '@testing-library/react'

describe('CardPokemon.tsx', () => {
  test('When clicking on the card the function should be called', () => {
    const mockFunction = jest.fn()
    render(
      <CardPokemon
        title="Titulos"
        handleClick={mockFunction}
        onLoad={jest.fn()}
        image="./urlImage"
        index={1}
      />
    )
    const card = screen.getByTestId('card-pokemon__image')
    fireEvent.click(card)
    expect(mockFunction).toHaveBeenCalled()
  })

  test('Should declare the text when rendering the component', async () => {
    const mockFunction = jest.fn()
    render(
      <CardPokemon
        title="Titulos"
        handleClick={mockFunction}
        onLoad={jest.fn()}
        image="./urlImage"
        index={1}
        textButton="Titulo"
      />
    )
    const tituloButton = screen.getByText('Titulo')
    expect(tituloButton).toBeInTheDocument()
  })
})
