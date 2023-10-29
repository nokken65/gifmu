import { zodTransformer } from './src/shared/api/zodTransformer'

import 'dotenv/config'

import { defineConfig } from 'orval'

export default defineConfig({
  giphy: {
    input: {
      target: process.env.GIPHY_OPENAPI_URL ?? ''
    },
    output: {
      mode: 'split',
      clean: true,
      // indexFiles: true,
      // schemas: './src/shared/api/giphy/generated/models',
      target: './src/shared/api/giphy/generated/api.ts',
      override: {
        useTypeOverInterfaces: true,
        mutator: {
          name: 'request',
          path: './src/shared/api/request.ts'
        }
      }
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write'
    }
  },
  'giphy-zod': {
    input: {
      target: process.env.GIPHY_OPENAPI_URL ?? '',
      override: {
        transformer: zodTransformer
      }
    },
    output: {
      mode: 'single',
      client: 'zod',
      target: './src/shared/api/giphy/generated/schemas.ts'
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write'
    }
  }
})
