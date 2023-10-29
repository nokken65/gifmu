import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/app'
import { createWrapperAndAppendToDOM } from '@/shared/utils/createWrapperAndAppendToDOM'

import { app } from './app/model'

app.run()

createAppRoot(App)

function createAppRoot(children: React.ReactNode) {
  let appRootElement = document.getElementById('app-root')

  if (appRootElement === null) {
    appRootElement = createWrapperAndAppendToDOM({
      wrapperId: 'app-root',
      prepend: true
    })
  }

  createRoot(appRootElement).render(
    <React.StrictMode>{children}</React.StrictMode>
  )
}
