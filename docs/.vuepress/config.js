module.exports = {
  lang: 'en-GB',
  base: '/',
  title: 'Nodeactyl Docs',
  description: 'API Wrapper built for the pterodactyl panel',
  dest: '.vuepress/dist',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'https://github.com/Nodeactyl/Nodeactyl',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'main',
    editLinkText: 'Edit page',
    lastUpdated: true,
    nav: [
      {
        text: 'API Reference',
        link: '/api/',
      },
      {
        text: 'Guides',
        link: '/guides/'
      },
      {
        text: 'Discord',
        link: 'https://discord.com/invite/HvQ4JTqCvs'
      }
    ],
    sidebar: {
      '/api/': [
        {
          title: 'API Reference',
          collapsable: false,
          children: [
            'client',
            'application',
            'server-builder'
          ]
        },
      ],
      '/guides/': [
        {
          title: 'Guides',
          collapsable: false,
          children: [
            'quick-start',
            'creating-servers'
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-search',
    'autodoc'
  ]
}
