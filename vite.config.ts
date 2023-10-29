import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import webfontDownload from 'vite-plugin-webfont-dl'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    vanillaExtractPlugin(),
    webfontDownload([], { async: true, cache: true, minifyCss: true })
  ],
  server: { port: 3000 },
  preview: { port: 3000 },
  build: {
    emptyOutDir: true,
    sourcemap: true,
    cssCodeSplit: true,
    cssMinify: 'lightningcss',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'effector-vendor': [
            'effector',
            'effector-react',
            'effector-storage',
            '@effector/reflect',
            'patronum'
          ],
          'router-vendor': ['atomic-router', 'atomic-router-react', 'history'],
          'farfetched-vendor': ['@farfetched/core', '@farfetched/zod'],
          'mantine-vendor': [
            '@mantine/core',
            '@mantine/hooks',
            '@mantine/vanilla-extract',
            '@vanilla-extract/css'
          ],
          'utils-vendor': ['ramda', 'zod', 'clsx']
        }
      }
    }
  }
})
