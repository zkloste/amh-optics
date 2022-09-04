const withFonts = require("next-fonts");

/** @type {import('next').NextConfig} */
const nextConfig = withFonts({
  reactStrictMode: true,
  swcMinify: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
});

module.exports = nextConfig;
