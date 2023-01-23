/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // These are all the lang you want to support in
    // your application
    locales: ['en', 'nl'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'nl',
    localeDetection: false
  },
  // Docker support
  output: 'standalone'
}

module.exports = nextConfig
