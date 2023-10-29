import React from 'react'
import { ColorSwatch, SegmentedControl } from '@mantine/core'

import { theme } from '@/shared/theme'

import '../model'

import { useUnit } from 'effector-react'

import { primaryColor } from '../model'
import { control, indicator, label, root } from './SelectPrimaryColor.css'

const data = Object.entries(theme.colors)
  .filter(([color]) => color !== 'dark' && color !== 'gray')
  .map(([color, shades]) => ({
    value: color,
    label: <ColorSwatch color={shades[6]} />
  }))

const _SelectPrimaryColor = () => {
  const [color, setColor] = useUnit([primaryColor.$value, primaryColor.setted])

  return (
    <SegmentedControl
      data={data}
      onChange={setColor}
      defaultValue={color}
      classNames={{ root, label, control, indicator }}
    />
  )
}

export const SelectPrimaryColor = React.memo(_SelectPrimaryColor)
