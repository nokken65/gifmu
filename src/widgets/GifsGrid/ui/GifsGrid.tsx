import { list, variant } from '@effector/reflect'
import { Container } from '@mantine/core'

import { GifPreview, gifsModel } from '@/entities/Gif'
import { Gif } from '@/shared/api/giphy'

import { $isPending } from '../model'
import { container } from './GifsGrid.css'
import { GifsGridSkeleton } from './GifsGridSkeleton'

const GifsItem = (gif: Gif) => {
  return <GifPreview {...gif} />
}

const GifsList = list({
  view: GifsItem,
  source: gifsModel.$gifs,
  getKey: (gif) => gif.id!
})

const GifsContent = variant({
  if: $isPending,
  then: GifsGridSkeleton,
  else: GifsList
})

export const GifsGrid = () => {
  return (
    <Container className={container}>
      <GifsContent />
    </Container>
  )
}
