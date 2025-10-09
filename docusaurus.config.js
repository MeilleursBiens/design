const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MeilleursBiens | Charte graphique',
  tagline: 'Réseau d\'Agents Mandataires',
  url: 'https://design.mbiens.com',
  baseUrl: '/',
  projectName: 'meilleursbiens.github.io',
  organizationName: 'MeilleursBiens',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MeilleursBiens',
  projectName: 'design',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Logo de MeilleursBiens',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg'
      },
      items: [
        {href: 'https://meilleursbiens.com', label: 'Portail', position: 'right'},
        {href: 'https://meilleursbiens.pro', label: 'Espace Agent', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      copyright: `MeilleursBiens - Tous Droits Réservés - ${new Date().getFullYear()}`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
