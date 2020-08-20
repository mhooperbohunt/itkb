const path = require('path');

const siteConfig = {
  title: 'Bohunt Wokingham IT ', // Title for your website.
  tagline: 'A Document Site for IT Support at Bohunt Wokingham',
  url: 'https://your-docusaurus-test-site.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',erbohunt',
  projectName: 'itkb',
  organizationName: 'mhooperbohunt',
  projectName: 'bohunt-wokingham-docs',
  organizationName: 'Bohunt Wokingham',
  
  headerLinks: [
    {doc: 'ad', label: 'IT'},
    {page: 'inventory', label: 'Inventory'},
    {blog: true, label: 'Blog'},
  ],

  headerIcon: 'img/logo.svg',
  footerIcon: 'img/logo.svg',
  favicon: 'img/logo.svg',
    {doc: 'ad', label: 'Docs'},
    {blog: true, label: 'Blog'},
  ],

  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',
  colors: {
    primaryColor: '#000000',
    secondaryColor: '#f0a806',
  },

  fonts: {
    myFont: [
      "Open Sans ",
      "Sans-Serif"
    ]
  },

  copyright: `Copyright © ${new Date().getFullYear()} Bohunt Wokingham`,

  highlight: {
    theme: 'default',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',
  cleanUrl: true,

  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
};

module.exports = siteConfig;
