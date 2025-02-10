/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
                pathname: '**',
            }
        ]
    }, 
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
};

export default nextConfig;


  