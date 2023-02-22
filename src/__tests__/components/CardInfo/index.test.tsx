import { render, screen } from '@testing-library/react'

import { CardInfo } from '../../../components/CardInfo'

describe('CardInfo.tsx', () => {
  test('Asserts props', () => {
    render(<CardInfo title="Title" description="Description" />)

    const title = screen.getByText('Title')
    const description = screen.getByText('Description')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  test('Should render only description element', () => {
    render(<CardInfo description="Description" />)

    const title = screen.queryByTestId('card-info__title')
    const description = screen.getByText('Description')

    expect(title).not.toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  test('should exists class is-skeleton when prop isLoading is true', () => {
    render(
      <CardInfo title="Title" description="Description" isLoading={true} />
    )
    const element = screen.getByTestId('card-info')
    expect(element).toHaveClass('is-skeleton')
  })

  test('should not exists class is-skeleton when prop isLoading is false', () => {
    render(<CardInfo title="Title" description="Description" />)
    const element = screen.queryByTestId('card-info')
    expect(element).not.toHaveClass('is-skeleton')
  })
})
