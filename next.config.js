const path = require("path");
/** @type {import('next').NextConfig} */
const stylesRootPath = path.join(__dirname, `app${path.sep}styles`);
const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, stylesRootPath),
      path.join(__dirname, `${stylesRootPath}${path.sep}scss`),
    ],
  },
};
module.exports = nextConfig;
