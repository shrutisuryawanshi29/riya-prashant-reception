import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', 'VITE_');
  let canonical: URL | null = null;
  if (env.VITE_SITE_URL) {
    canonical = new URL(env.VITE_SITE_URL);
    if (canonical.protocol !== 'https:' || /^(localhost|127\.|0\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|\[::1\])/i.test(canonical.hostname) || canonical.hostname.endsWith('.local')) throw new Error('VITE_SITE_URL must be a public HTTPS URL.');
    canonical.hash = ''; canonical.search = '';
  }
  return {plugins: [react(), tailwindcss(), {
    name: 'invitation-social-metadata',
    transformIndexHtml() {
      if (!canonical) return [
        {tag: 'meta', attrs: {property: 'og:image', content: '/images/reception-social-preview.jpg'}, injectTo: 'head' as const},
        {tag: 'meta', attrs: {name: 'twitter:image', content: '/images/reception-social-preview.jpg'}, injectTo: 'head' as const},
      ];
      const image = new URL('images/reception-social-preview.jpg', canonical.href.endsWith('/') ? canonical : canonical.href + '/').href;
      return [
        {tag: 'link', attrs: {rel: 'canonical', href: canonical.href}, injectTo: 'head' as const},
        ...[['og:url', canonical.href], ['og:image', image], ['og:image:width', '1200'], ['og:image:height', '630'], ['og:image:alt', 'Riya and Prashant — Our Wedding Reception, 6 December 2026 in Thane'], ['twitter:image', image]].map(([property,content])=>({tag:'meta',attrs:{[property.startsWith('twitter:')?'name':'property']:property,content},injectTo:'head' as const})),
      ];
    },
  }]};
});
