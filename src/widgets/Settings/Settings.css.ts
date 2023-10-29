import { vars } from '@/shared/theme/baseTheme'

import { style } from '@vanilla-extract/css'

export const dropdown = style({
  padding: vars.spacing.xs,
  border: 'none',
  // backgroundColor: 'transparent',
  backdropFilter: 'blur(10px)',

  '@media': {
    [`screen and (max-width:${vars.breakpoints.sm})`]: {
      width: '100% !important'
    },
    [`screen and (min-width:${vars.breakpoints.sm})`]: {
      maxWidth: '200px'
    }
  }
})
