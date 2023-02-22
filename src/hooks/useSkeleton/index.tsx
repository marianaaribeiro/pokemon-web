type SkeletonFn = (type?: string) => string

export const useSkeleton = (loading: boolean): [SkeletonFn] => {
  const skeletonClass = (type = 'default'): string => {
    if (type === 'default') {
      return loading ? 'is-skeleton' : ''
    } else {
      return loading ? 'animate-pulse' : ''
    }
  }

  return [skeletonClass]
}
