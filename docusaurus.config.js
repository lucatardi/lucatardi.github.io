// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Luca Tardito',
  tagline: '👨🏻‍💻 Coder & Traveller 🗺',
  url: 'https://lucatardi.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'tardito-dev',
  organizationName: 'lucatardi',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'tardito.dev',
        logo: {
          alt: 'My Penguin Logo',
          src: 'img/penguin_icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tech Tutorial 👨🏻‍💻',
          },
          {to: '/blog', label: 'Travel Blog 🗺', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sections',
            items: [
              {
                label: 'Tech Tutorial 👨🏻‍💻',
                to: '/docs/intro',
              },
              {
                label: 'Travel Blog 🗺',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/luca.tardito',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/tarditoluca',
              },
            ],
          },
          {
            title: 'Contacts',
            items: [
              {
                label: 'Linkedin',
                href: 'https://ie.linkedin.com/in/lucatardito',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lucatardi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} tardito.dev`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
