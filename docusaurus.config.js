const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'MELON',
  tagline: 'A Powerful Multipurpose Bot',
  url: 'https://melondocs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'japandotorg', 
  projectName: 'melon-docs',

  plugins: [
      require.resolve('@cmfcmf/docusaurus-search-local')
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/japandotorg',
        },
        blog: {
          showReadingTime: true,

          editUrl:
            'https://github.com/japandotorg',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /**
     * @type {import('@docusaurus/preset-classic').ThemeConfig}
     */
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
            className: 'header-github-link',
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
});