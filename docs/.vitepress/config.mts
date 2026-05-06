import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/api-listings/', 
  title: "ACCEA API Documentation",
  description: "Internal API Reference Guide",
  outDir: '../public',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CMMS API Reference', link: '/cmms-api' },
      { text: 'WOS API Reference', link: '/wos-api' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Home', link: '/' },
          { text: 'CMMS API Reference', link: '/cmms-api' },
          { text: 'WOS API Reference', link: '/wos-api' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fiqahalim2509' }
    ]
  }
})
