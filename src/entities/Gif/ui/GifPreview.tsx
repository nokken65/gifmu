import React from 'react'
import { Skeleton } from '@mantine/core'
import { useInView } from 'framer-motion'

import { Gif } from '@/shared/api/giphy'
import { theme } from '@/shared/theme'

import { gif, skeleton, wrapper } from './GifPreview.css'

type GifPreviewProps = Gif

const _GifPreview = ({ images, slug }: GifPreviewProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const inView = useInView(wrapperRef, {
    margin: '-10px 0px 10px 0px',
    once: true
  })

  return (
    <div className={wrapper}>
      {inView && (
        <picture onLoad={() => setIsLoading(false)}>
          <source
            srcSet={images?.downsized_large?.url}
            media={`(min-width: ${theme.breakpoints.xl})`}
          />
          <source
            srcSet={images?.downsized_medium?.url}
            media={`(min-width: ${theme.breakpoints.lg})`}
          />
          <source
            srcSet={images?.downsized_small?.url}
            media={`(min-width: ${theme.breakpoints.md})`}
          />
          <source
            srcSet={images?.downsized_still?.url}
            media={`(min-width: ${theme.breakpoints.xs})`}
          />
          <source
            srcSet={images?.preview_gif?.url}
            media={`(min-width: 0)`}
          />
          <img
            className={gif}
            loading="lazy"
            src={images?.downsized?.url}
            alt={slug}
          />
        </picture>
      )}
      {isLoading && (
        <Skeleton
          ref={wrapperRef}
          className={skeleton}
          height={images?.downsized?.height}
        />
      )}
    </div>
  )
}

export const GifPreview = React.memo(_GifPreview)
