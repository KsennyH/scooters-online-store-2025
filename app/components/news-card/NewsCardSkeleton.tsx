import { JSX } from 'react';
import Skeleton from 'react-loading-skeleton';

export const NewsCardSkeleton = ():JSX.Element => {
  return (
     <div>
      <Skeleton height={300} style={{borderRadius: 10}} />
    </div>
  )
}
