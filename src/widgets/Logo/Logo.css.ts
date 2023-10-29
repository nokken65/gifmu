import { rem } from '@mantine/core'

import { vars } from '@/shared/theme/baseTheme'

import { style } from '@vanilla-extract/css'

export const link = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  ':visited': {
    color: 'unset'
  }
})

export const title = style({
  display: 'none',
  color: 'var(--mantine-primary-color-filled)',
  '@media': {
    [`screen and (min-width: ${vars.breakpoints.sm})`]: {
      display: 'inline-block'
    }
  }
})

export const icon = style({
  width: rem(36),
  height: rem(36),
  color: 'var(--mantine-primary-color-filled)'
})
