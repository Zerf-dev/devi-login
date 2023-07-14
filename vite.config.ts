import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), viteSingleFile({ removeViteModuleLoader: true })],
  build: { minify: true },
  resolve: {
    alias: {
      '#assets': path.resolve(__dirname, './src/common/assets'),
      '#contexts': path.resolve(__dirname, './src/common/contexts'),
      '#services': path.resolve(__dirname, './src/common/services'),
      '#constants': path.resolve(__dirname, './src/common/constants'),
      '#styles': path.resolve(__dirname, './src/common/styles'),
      '#utils': path.resolve(__dirname, './src/common/utils'),
      '#hooks': path.resolve(__dirname, './src/common/hooks'),
      '#components': path.resolve(__dirname, './src/components')
    }
  }
});
