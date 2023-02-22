import { useSkeleton } from '@/hooks/useSkeleton'
import './styles.scss'
interface SectionTitleProps {
  text: string
  isLoading?: boolean
}

export const SectionTitle = (props: SectionTitleProps): JSX.Element => {
  const { text, isLoading = false } = props
  const [skeleton] = useSkeleton(isLoading)
  return (
    <>
      <h2 className={`section-title ${skeleton()}`} data-testid="section-title">
        {text}
      </h2>
    </>
  )
}
