import { ReactNode, Suspense } from 'react'

import { Spinner } from '../../components/Spinner'

interface FallbackProps {
  children: ReactNode
}

export const Fallback = ({ children }: FallbackProps): JSX.Element => {
  return (
    <>
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </>
  )
}
