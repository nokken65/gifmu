import { rem } from '@mantine/core'

import { vars } from '@/shared/theme/baseTheme'

import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  minWidth: '100%',
  columnFill: 'balance',

  '@media': {
    [`screen and (min-width: 0)`]: {
      columnCount: '2',
      columnGap: rem(4)
    },
    [`screen and (min-width:${vars.breakpoints.xs})`]: {
      columnCount: '3',
      columnGap: rem(8)
    },
    [`screen and (min-width:${vars.breakpoints.sm})`]: {
      columnCount: '4',
      columnGap: rem(12)
    },
    [`screen and (min-width:${vars.breakpoints.md})`]: {
      columnCount: '5',
      columnGap: rem(16)
    },
    [`screen and (min-width:${vars.breakpoints.lg})`]: {
      columnCount: '6',
      columnGap: rem(20)
    },
    [`screen and (min-width:${vars.breakpoints.xl})`]: {
      columnCount: '7',
      columnGap: rem(24)
    }
  }
})
