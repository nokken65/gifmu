import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
})

export const control = style({
  // margin: 'auto',
  // flex: '0 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 'fit-content',

  ':before': {
    display: 'none'
  }
})

export const label = style({
  padding: '0.4rem'
  // width: 'fit-content'
})

export const indicator = style({
  // margin: 'auto'
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
