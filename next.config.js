// module.exports = {
//   webpack: function(config) {
//     config.module.rules.push({
//       test: /\.md$/,
//       use: 'raw-loader',
//     })
//     return config
//   },
// }


const withLess = require('@zeit/next-less')
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

// next.config.js
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  distDir: 'build',
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )

    return config
  },
};

module.exports = withPlugins([withSass, withLess, withCSS], nextConfig);
