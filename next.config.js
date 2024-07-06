module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://api.cloudinary.com/v1_1/:path*',
        },
      ]
    },
};