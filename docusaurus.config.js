module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://heshamamoudi.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'heshamamoudi', // Usually your GitHub org/user name.
  projectName: 'OptionCaf-', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        className:'logo',
        alt: 'My Site Logo',
        src: 'https://github.com/heshamamoudi/OptionCaf-/blob/master/LogoOC.png?raw=true',
        
      },
      
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'كيفية الاستخدام',
          position: 'left',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
