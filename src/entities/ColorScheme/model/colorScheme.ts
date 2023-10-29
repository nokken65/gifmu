import { MantineColorScheme } from '@mantine/core'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { persist } from 'effector-storage/local'
import { debug } from 'patronum'

const settedFx = createEffect<MantineColorScheme, void>(
  async (newColorScheme) => {
    document.documentElement.setAttribute(
      'data-mantine-color-scheme',
      newColorScheme
    )
  }
)

const setted = createEvent<MantineColorScheme>()
const $value = createStore<MantineColorScheme>('light')

sample({
  clock: setted,
  target: [settedFx, $value]
})

persist({ store: $value, key: 'color-scheme' })

debug($value)

export const colorScheme = { $value, setted }
