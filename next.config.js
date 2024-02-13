module.exports = {
    images: {
        domains: ['picsum.photos',"source.unsplash.com",'firebasestorage.googleapis.com'],
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'firebasestorage.googleapis.com',
              port: '',
              pathname: '/image/upload/**',
            },
          ],
      },
  }