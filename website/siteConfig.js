const path = require('path');

const siteConfig = {
  customDocsPath: path.basename(__dirname) + '/docs',
  title: 'Bohunt Wokingham IT ', 
  tagline: 'A Document Site for IT Support at Bohunt Wokingham',
  url: 'https://mhooperbohunt.github.io',
  baseurl: '/itkb',
  projectName: 'itkb',
  organizationName: 'mhooperbohunt',
  projectName: 'bohunt-wokingham-docs',
  organizationName: 'Bohunt Wokingham',
  
  headerLinks: [
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
