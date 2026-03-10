import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Serve prototype/index.html for all /prototype/* routes that aren't real files
// This enables React Router client-side routing within the prototype
function prototypeHistoryFallback(): Plugin {
  return {
    name: 'prototype-history-fallback',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url?.startsWith('/prototype/') && !req.url.startsWith('/prototype/assets/')) {
          const filePath = path.join(process.cwd(), 'public', req.url)
          if (!fs.existsSync(filePath)) {
            req.url = '/prototype/index.html'
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [prototypeHistoryFallback(), react(), tailwindcss()],
  server: {
    port: 4200,
  },
})
