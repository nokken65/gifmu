import { api } from '@/shared/api/giphy'
import { createQuery } from '@/shared/factories/createQuery'

const query = createQuery({
  handler: api.trendingGifs
})

export { query }
