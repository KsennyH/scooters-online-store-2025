import { JSX } from 'react';
import Skeleton from 'react-loading-skeleton';

export const NewsCardSkeleton = ():JSX.Element => (
  <div>
    <Skeleton height={200} style={{borderRadius: 10}} />
  </div>
);