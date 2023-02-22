import { useSkeleton } from '@/hooks/useSkeleton'
import './styles.scss'

interface CardInfoProps {
  title?: string
  description: string | number | string[]
  isLoading?: boolean
}

export const CardInfo = ({
  title,
  description,
  isLoading = false,
}: CardInfoProps): JSX.Element => {
  const [skeleton] = useSkeleton(isLoading)

  return (
    <div className={`card-info ${skeleton()}`} data-testid="card-info">
      {title && (
        <div className="card-info__title" data-testid="card-info__title">
          {title}
        </div>
      )}

      <div
        className="card-info__description"
        data-testid="card-info__description"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  )
}
