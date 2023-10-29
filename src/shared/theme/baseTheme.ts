import { createTheme, rem } from '@mantine/core'
import { themeToVars } from '@mantine/vanilla-extract'

export const baseTheme = createTheme({
  primaryShade: { light: 6, dark: 5 },
  cursorType: 'pointer',
  fontSmoothing: true,
  radius: { md: '15px' },
  defaultRadius: 'md',
  fontFamily:
    'Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  headings: {
    fontWeight: '700',
    sizes: {
      h1: { fontSize: rem(24) }
    }
  },
  focusRing: 'auto',
  breakpoints: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px'
  },
  colors: {
    brown: [
      '#f7f3f2',
      '#e7e5e5',
      '#d2c9c6',
      '#bdaaa4',
      '#ab9087',
      '#a17f75',
      '#9d766b',
      '#896459',
      '#7b584e',
      '#6d4b40'
    ]
  }
})

export const vars = themeToVars(baseTheme)
