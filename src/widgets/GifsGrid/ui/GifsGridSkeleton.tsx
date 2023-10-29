import React from 'react'
import { Skeleton } from '@mantine/core'

import { randomNumber } from '@/shared/utils/randomNumber'

import { skeleton } from './GifsGridSkeleton.css'

type GifsGridSkeletonProps = {
  countItems?: number
}

const _GifsGridSkeleton = ({ countItems = 10 }: GifsGridSkeletonProps) => {
  return (
    <>
      {Array.from(Array(countItems).keys()).map((n) => (
        <Skeleton
          key={n}
          className={skeleton}
          height={randomNumber(100, 250)}
        />
      ))}
    </>
  )
}

export const GifsGridSkeleton = React.memo(_GifsGridSkeleton)
