// // next.config.mjs
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//       esmExternals: false, // This flag prevents esm/cjs errors
//     },
//   };
  
//   export default nextConfig;
  

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      }
    ]
  }
}

export default nextConfig;