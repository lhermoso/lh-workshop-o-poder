/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for development error catching
    reactStrictMode: true,

    // Image optimization config
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: [],
        formats: ['image/webp'],
        minimumCacheTTL: 60,
    },

    // Compression for faster page loads
    compress: true,

    // Cache headers for static assets
    async headers() {
        return [
            {
                source: '/:path(.*)\\.(jpg|jpeg|gif|png|svg|ico|webp|avif)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    }
                ],
            },
            {
                source: '/:path(.*)\\.(js|css)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    }
                ],
            },
        ];
    },

    // Enable SWC minify for faster builds
    swcMinify: true,

    // Use Turbopack in dev for faster reload times (comment out if causing issues)
    // experimental: {
    //   turbo: true,
    // },
};

module.exports = nextConfig; 