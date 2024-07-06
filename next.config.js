// next.config.js
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      child_process: false,
      net: false,
      tls: false,
      crypto: false,
      dns: false,
      'timers/promises': false,
      kerberos: false,
      zstd: false,
      '@aws-sdk/credential-providers': false,
      'gcp-metadata': false,
      aws4: false,
      'mongodb-client-encryption': false,
      snappy: false,
      socks: false,
      '@mongodb-js/zstd': false,
    };

    return config;
  },
};
