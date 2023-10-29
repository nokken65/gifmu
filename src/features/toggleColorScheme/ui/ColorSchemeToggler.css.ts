import { style } from '@vanilla-extract/css'

export const control = style({
  ':before': {
    display: 'none'
  }
})

export const label = style({
  padding: '0.4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  selectors: {
    '&[data-active="true"]': {
      color: 'var(--mantine-primary-color-filled)'
    }
  }
})

export const indicator = style({
  // display: 'none'
})
