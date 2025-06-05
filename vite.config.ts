import { defineConfig } from "vite";
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      viteStaticCopy({
        targets: [
          { src: 'manifest.json', dest: '' }, // Copies manifest.json to the root of the build folder
        ],
      }),
    ],
  build: {
    rollupOptions: {
      input: {
        background: "./src/background.ts",
      },
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
      preserveEntrySignatures: 'strict',
    },
    copyPublicDir: true, // Ensures assets in the public folder are included
    assetsDir: '', // Keeps assets in the root instead of a separate folder
  },
  publicDir: 'public',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.json'], // Includes necessary assets
});