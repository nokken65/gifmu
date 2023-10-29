import React from 'react'
import { AppShell } from '@mantine/core'

import { Logo } from '@/widgets/Logo'
import { Settings } from '@/widgets/Settings'

import { footer, main } from './Layout.css'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <React.Suspense>
      <AppShell
        footer={{ height: 48 }}
        classNames={{ main, footer }}
      >
        <AppShell.Main>{children}</AppShell.Main>
        <AppShell.Footer>
          <Logo />
          <Settings />
        </AppShell.Footer>
      </AppShell>
    </React.Suspense>
  )
}

export { Layout }
