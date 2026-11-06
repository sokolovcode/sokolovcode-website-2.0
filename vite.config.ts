import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { srcset } from '@srcset/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    srcset({
      rules: [{
        width: [1, 0.75, 0.5]
      }],
      placeholder: true,
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  css: {
    modules: {
      scopeBehaviour: 'local',
      globalModulePaths: [],
      generateScopedName: undefined,
      hashPrefix: '',
      localsConvention: 'camelCaseOnly',
    },

    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/app/styles/helpers' as *;
        `,
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})
