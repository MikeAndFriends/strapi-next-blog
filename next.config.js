const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");

const prod = process.env.NODE_ENV === 'production'

module.exports = withCSS({
  env: {
    BACKEND_URL: prod
      ? 'https://production.url'
      : 'https://dev.url',
    GRAPHQL_API_URL: prod
      ? 'https://production.url/graphql'
      : 'https://dev.url/graphql'
  }
});
