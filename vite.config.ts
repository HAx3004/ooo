import {defineConfig} from 'vite';
import {vitePlugin as remix} from '@remix-run/dev';
import {hydrogen} from '@shopify/hydrogen/vite';
import {oxygen} from '@shopify/mini-oxygen/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
    }),
    tsconfigPaths(),
  ],
  ssr: {
    optimizeDeps: {
      include: ['typographic-base/index', 'textr'],
    },
  },
});
