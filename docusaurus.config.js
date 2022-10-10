// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'aqua',
  tagline: 'Declarative CLI Version Manager. Install tools easily',
  url: 'https://aquaproj.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://raw.githubusercontent.com/aquaproj/aqua/main/logo/aqua_without_text.svg',
  organizationName: 'aquaproj', // Usually your GitHub org/user name.
  projectName: 'aqua', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/aquaproj/aquaproj.github.io/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          routeBasePath: '/blog',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © 2021 Shunsuke Suzuki. Built with Docusaurus.`,
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'release_checksum_verification',
        content:
          '<a href="/docs/reference/checksum">aqua now supports the Checksum Verification</a>',
        backgroundColor: '#7FFF00',
        textColor: '#091E42',
        isCloseable: true,
      },
      navbar: {
        title: 'aqua',
        logo: {
          alt: 'aqua Logo',
          src: 'https://raw.githubusercontent.com/aquaproj/aqua/main/logo/aqua_without_text.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'doc',
            docId: 'tutorial-basics/quick-start',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'reference/install',
            position: 'left',
            label: 'Install',
          },
          {
            type: 'doc',
            docId: 'comparison/index',
            position: 'left',
            label: 'Comparison',
          },
          {
            type: 'doc',
            docId: 'slide-blog',
            position: 'left',
            label: 'Blog',
          },
          {
            href: 'https://asciinema.org/a/498262?autoplay=1',
            label: 'Demo',
            position: 'right',
          },
          {
            href: 'https://github.com/aquaproj/aqua/discussions',
            label: 'Question',
            position: 'right',
          },
          {
            href: 'https://github.com/aquaproj/aqua',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/overview',
              },
              {
                label: 'Comparison',
                to: '/docs/comparison',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/aquaproj/aqua',
              },
              {
                href: 'https://github.com/aquaproj/aqua-registry',
                label: 'Standard Registry',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/aquaclivm',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021 Shunsuke Suzuki. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'OBO5AZ814M',
        // Public API key: it is safe to commit it
        apiKey: '7ebd7217e9bd4836c5094b4acdf1a0c9',
        indexName: 'aquaproj',
        // Optional: see doc section below
        // contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        //... other Algolia params
      },
    }),
};

module.exports = config;
