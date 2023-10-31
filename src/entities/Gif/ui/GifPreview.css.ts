import { vars } from '@/shared/theme/baseTheme'

import { style } from '@vanilla-extract/css'

export const wrapper = style({
  position: 'relative',
  overflow: 'hidden'
})

export const gif = style({
  width: '100%',
  height: '100%',
  borderRadius: vars.radius.md
})

export const skeleton = style({
  borderRadius: vars.radius.md,
  width: '100%',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
})
