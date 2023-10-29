import { vars } from '../shared/theme/baseTheme'
import { globalStyle, style } from '@vanilla-extract/css'

export const root = style({
  '@media': {
    [`screen and (min-width: ${vars.breakpoints.xs})`]: {
      columnCount: 1
    },
    [`screen and (min-width: ${vars.breakpoints.sm})`]: {
      columnCount: 2
    },
    [`screen and (min-width: ${vars.breakpoints.md})`]: {
      columnCount: 3
    },
    [`screen and (min-width: ${vars.breakpoints.lg})`]: {
      columnCount: 4
    }
  }
})

globalStyle('body', {
  [vars.lightSelector]: {
    backgroundColor: vars.colors.gray[0]
  },
  [vars.darkSelector]: {
    backgroundColor: vars.colors.gray[9]
  }
})
