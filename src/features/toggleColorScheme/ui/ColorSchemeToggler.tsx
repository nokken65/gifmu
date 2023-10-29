import React from 'react'
import {
  MantineColorScheme,
  SegmentedControl,
  useMantineColorScheme
} from '@mantine/core'

import { AutoIcon, MoonIcon, SunIcon } from '@/shared/icons'

import { control, indicator, label } from './ColorSchemeToggler.css'

const colorSchemeIcons = {
  light: (
    <SunIcon
      width={20}
      height={20}
    />
  ),
  auto: (
    <AutoIcon
      width={20}
      height={20}
    />
  ),
  dark: (
    <MoonIcon
      width={20}
      height={20}
    />
  )
}

const data = [
  {
    label: colorSchemeIcons['light'],
    value: 'light'
  },
  {
    label: colorSchemeIcons['auto'],
    value: 'auto'
  },
  {
    label: colorSchemeIcons['dark'],
    value: 'dark'
  }
]

const _ColorSchemeToggler = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  return (
    <SegmentedControl
      data={data}
      onChange={(value) => setColorScheme(value as MantineColorScheme)}
      defaultValue={colorScheme}
      classNames={{ label, control, indicator }}
    />
  )
}

export const ColorSchemeToggler = React.memo(_ColorSchemeToggler)
