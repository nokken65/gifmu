import { DefaultMantineColor } from '@mantine/core'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { Done, persist } from 'effector-storage/local'

import { theme } from '@/shared/theme'
import { stringifyCSSVars } from '@/shared/utils/stringifyCSSVars'

const DEFAULT_VALUE = theme.primaryColor

const settedFx = createEffect<DefaultMantineColor, void>(async (color) => {
  let styleTag = document.getElementById('primary-color')

  if (styleTag === null) {
    styleTag = document.createElement('style')
    styleTag.setAttribute('id', 'primary-color')
    document.body.prepend(styleTag)
  }

  styleTag.innerText = stringifyCSSVars({
    selector: ':root',
    vars: [
      [
        '--mantine-primary-color-filled',
        `var(--mantine-color-${color}-filled)`
      ],
      [
        '--mantine-primary-color-filled-hover',
        `var(--mantine-color-${color}-filled-hover)`
      ],
      ['--mantine-primary-color-light', `var(--mantine-color-${color}-light)`],
      [
        '--mantine-primary-color-light-hover',
        `var(--mantine-color-${color}-light-hover)`
      ],
      [
        '--mantine-primary-color-light-color',
        `var(--mantine-color-${color}-light-color)`
      ]
    ]
  })
})

const setted = createEvent<DefaultMantineColor>()
const readedLocalStorage = createEvent<Done<DefaultMantineColor>>()

const $value = createStore(DEFAULT_VALUE)

sample({
  clock: setted,
  target: [settedFx, $value]
})

sample({
  clock: readedLocalStorage,
  filter: ({ operation }) => operation === 'get',
  fn: ({ value }) => value,
  target: settedFx
})

persist({
  store: $value,
  key: 'primary-color',
  done: readedLocalStorage
})

export const primaryColor = { $value, setted }
