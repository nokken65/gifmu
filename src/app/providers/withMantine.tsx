import { MantineProvider } from '@mantine/core'

import { theme } from '../../shared/theme'

export const withMantine = (component: () => React.ReactNode) => (
  <MantineProvider theme={theme}>{component()}</MantineProvider>
)
