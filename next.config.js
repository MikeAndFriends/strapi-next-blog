const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");

const prod = process.env.NODE_ENV === 'production'

module.exports = withCSS({
  env: {
    API_URL: prod
      ? 'https://production.url'
      : 'https://dev.url'
  }
});
