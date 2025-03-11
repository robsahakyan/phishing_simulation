module.exports = {
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: 'https://api.com/sitemaps',
        },
        {
          source: '/robots.txt',
          destination: 'https://api.com/static/robots.txt',
        },
      ];
    },
  };
  