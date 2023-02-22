import { render, screen } from '@testing-library/react'

import { SectionTitle } from '../../../components/SectionTitle'

describe('SectionTitle.tsx', () => {
  test('assert prop text', () => {
    render(<SectionTitle text="title section" />)
    const text = screen.getByText('title section')
    expect(text).toBeInTheDocument()
  })

  test('should exists class is-skeleton when prop isLoading is true', () => {
    render(<SectionTitle text="title section" isLoading={true} />)
    const element = screen.getByTestId('section-title')
    expect(element).toHaveClass('is-skeleton')
  })

  test('should not exists be class is-skeleton when prop isLoading is false', () => {
    render(<SectionTitle text="title section" isLoading={false} />)
    const element = screen.getByTestId('section-title')
    expect(element).not.toHaveClass('is-skeleton')
  })

  test('should not exists be class is-skeleton when prop isLoading not is passed', () => {
    render(<SectionTitle text="title section" />)
    const element = screen.getByTestId('section-title')
    expect(element).not.toHaveClass('is-skeleton')
  })
})
