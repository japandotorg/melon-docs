const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MELON',
  tagline: 'A Powerful Multipurpose Bot',
  url: 'https://melondocs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'japandotorg',
  projectName: 'melon-docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require('mdx-mermaid')],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/japandotorg/melon-docs/tree/dev',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [require.resolve('docusaurus-lunr-search')],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MELON',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'DOCS',
          },
          {
            href: 'https://github.com/japandotorg',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} japandotorg`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  scripts: [
    'https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.4.4/mermaid.min.js',
    '/init.js',
  ],
  customFields: {
    markdownPlugins: [(md) => {
      md.renderer.rules.fence_custom.mermaid = (tokens, idx, options, env, instance) => {
        return `<div class="mermaid">${tokens[idx].content}</div>`;
      };
    }]
  }
};

module.exports = config;