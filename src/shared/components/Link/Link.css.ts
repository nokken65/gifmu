import { vars } from '@/shared/theme/baseTheme'

import { style } from '@vanilla-extract/css'

export const link = style({
  textDecoration: 'none',
  borderRadius: vars.radiusDefault,
  ':focus-visible': {
    outlineColor: 'var(--mantine-primary-color-filled)'
  }
})
