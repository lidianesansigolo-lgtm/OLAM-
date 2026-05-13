import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    // Configuramos o plugin para encontrar suas rotas e gerar o arquivo na raiz
    TanStackRouterVite({
      tailwindcss(),//
      routesDirectory: './src/routes',      // Verifique se suas rotas estão em src/routes
      generatedRouteTree: './routeTree.gen.ts', 
      quoteStyle: 'single',
    }),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    netlify(),
    tanstackStart(),
    viteReact(),
  ],
})
