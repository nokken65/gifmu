import { rem } from '@mantine/core'

import { vars } from '@/shared/theme/baseTheme'

import { style } from '@vanilla-extract/css'

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  overflowX: 'hidden',
  width: '100%',

  '@media': {
    [`screen and (min-width: 0)`]: {
      padding: rem(4)
    },
    [`screen and (min-width:${vars.breakpoints.xs})`]: {
      padding: rem(8)
    },
    [`screen and (min-width:${vars.breakpoints.sm})`]: {
      padding: rem(12)
    },
    [`screen and (min-width:${vars.breakpoints.md})`]: {
      padding: rem(16)
    },
    [`screen and (min-width:${vars.breakpoints.lg})`]: {
      padding: rem(20)
    },
    [`screen and (min-width:${vars.breakpoints.xl})`]: {
      padding: rem(24)
    }
  }
})

export const footer = style({
  padding: '0 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [vars.lightSelector]: {
    backgroundColor: vars.colors.gray[2]
  }
})
