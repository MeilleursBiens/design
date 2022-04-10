const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MeilleursBiens | Charte graphique',
  tagline: 'Réseau d\'Agents Mandataires',
  url: 'https://design.meilleursbiens.com',
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
    announcementBar: {
      id: 'beta',
      content:
        '<strong>Notre charte graphique est en Beta.</strong> Cette documentation est en cours de développement et sera mis à jour fréquemment.',
      backgroundColor: '#bb2030',
      textColor: '#FFF7ED',
      isCloseable: true,
    },
    navbar: {
      logo: {
        alt: 'Logo de MeilleursBiens',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg'
      },
      items: [
        {href: 'https://meilleursbiens.com', label: 'Portail', position: 'left'},
        {href: 'https://pro.meilleursbiens.com', label: 'Espace Agent', position: 'left'},
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Design',
        },
        {
          href: 'https://github.com/MeilleursBiens/design',
          label: 'GitHub',
          position: 'right',
        },
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
          editUrl:
              'https://github.com/calendso/design/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
