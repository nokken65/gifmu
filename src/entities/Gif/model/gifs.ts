import { createStore } from 'effector'

import { Gif } from '@/shared/api/giphy'

const $gifs = createStore<Array<Gif>>([])

$gifs.watch((s) => console.log(s))

export { $gifs }
