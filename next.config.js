module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
}

// const withSass = require("@zeit/next-sass");
// const withFonts = require("next-fonts");

// module.exports = withFonts(
//   withSass({
//     enableSvg: true,
//     webpack: function(config) {
//       config.module.rules.push({
//         test: /\.md$/,
//         use: 'raw-loader',
//       })
//       return config
//     }
//   })
// );

// const withCSS = require("@zeit/next-css");

// module.exports = withCSS({});