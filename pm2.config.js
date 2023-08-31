module.exports = {
  apps: [
    {
      name: 'nodejs-load-balancing',
      script: 'index.js',
      instances: 2,
      exec_mode: 'cluster',
      watch: true,
      increment_var: 'PORT',
      env: {
        PORT: 8088,
        NODE_ENV: 'production',
      }
    }
  ]
};
