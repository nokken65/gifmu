import {
  DEFAULT_THEME,
  mergeMantineTheme,
  mergeThemeOverrides
} from '@mantine/core'

import { baseTheme } from './baseTheme'
import { componentsTheme } from './componentsTheme'

export const theme = mergeMantineTheme(
  DEFAULT_THEME,
  mergeThemeOverrides(baseTheme, componentsTheme)
)
