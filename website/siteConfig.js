const siteConfig = {
  title: 'Bohunt Wokingham IT ', // Title for your website.
  tagline: 'A Document Site for IT Support at Bohunt Wokingham',
  url: 'https://your-docusaurus-test-site.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'bohunt-wokingham-docs',
  organizationName: 'Bohunt Wokingham',
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'ad', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#aa8c16',
    secondaryColor: '#76620f',
  },

  /* Fonts */
  fonts: {
    myFont: [
      "Open Sans ",
      "Sans-Serif"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Bohunt Wokingham`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // repoUrl: 'https://github.com/mhooperbohunt/itkb',
};

module.exports = siteConfig;
