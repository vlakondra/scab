import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svelte()],
// })

export default defineConfig({
  plugins: [svelte()],
  server: {
    // configure vite for HMR with Gitpod
    hmr: process.env.GITPOD_WORKSPACE_URL
      ? {
        // removes the protocol and replaces it with the port we're connecting to
        host: process.env.GITPOD_WORKSPACE_URL.replace('https://', '5173-'),
        protocol: 'wss',
        clientPort: 443
      }
      : true
  },
  // base:"/ssched/"
})