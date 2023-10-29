import { RouteInstance, RouteParams } from 'atomic-router'
import { sample } from 'effector'

import { gifsModel } from '@/entities/Gif'
import { getTrendingGifsModel } from '@/features/getTrendingGifs'
import { gifsGridModel } from '@/widgets/GifsGrid'

export const createModel = ({
  route
}: {
  route: RouteInstance<RouteParams>
}) => {
  sample({
    clock: route.opened,
    fn: () => ({ limit: 50 }),
    target: getTrendingGifsModel.query.refresh
  })

  sample({
    clock: getTrendingGifsModel.query.finished.success,
    filter: getTrendingGifsModel.query.$succeeded,
    fn: (res) => res.result.data ?? [],
    target: gifsModel.$gifs
  })

  sample({
    clock: getTrendingGifsModel.query.$pending,
    target: gifsGridModel.$isPending
  })
}
