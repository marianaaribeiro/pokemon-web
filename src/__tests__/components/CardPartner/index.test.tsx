import { render, screen } from '@testing-library/react'

import { CardPartner } from '../../../components/CardPartner'

describe('CardPartner.tsx', () => {
  test('When send image url to component should check if url is displayed', () => {
    render(
      <CardPartner title="Titulo" description="Descrição" image="./urlImage" />
    )
    const image = screen.getByTestId('card-partner__image')
    expect(image).toHaveStyle('background-image:url(./urlImage)')
  })
  test('Should declare the text when rendering the component', () => {
    render(
      <CardPartner title="Titulo" description="Descrição" image="./urlImage" />
    )
    const titulo = screen.getByText('Titulo')
    const description = screen.getByText('Descrição')
    expect(titulo).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
