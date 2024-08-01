/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["cms.soormachinery.com"],
  },
};

export default nextConfig;
