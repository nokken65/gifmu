import '@mantine/core/styles.css'
import './App.css'

import { variant } from '@effector/reflect'
import { Loader } from '@mantine/core'

import { Routing } from '@/pages'

import { app } from './model'
import { withProviders } from './providers'

const AppView = () => {
  return <Routing />
}

const _App = variant({
  source: app.$status,
  cases: {
    done: AppView,
    pending: () => (
      <Loader
        size={'xl'}
        styles={{
          root: {
            width: '100vw',
            minHeight: '100vh',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }}
      />
    )
  }
})

export const App = withProviders(() => <_App />)
