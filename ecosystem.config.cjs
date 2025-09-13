module.exports = {
  apps: [
    {
      name: 'backend',
      script: './backend/index.js',
      cwd: '/var/www/jas-technologies',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: '/home/deploy/.pm2/logs/backend-error.log',
      out_file: '/home/deploy/.pm2/logs/backend-out.log',
      log_file: '/home/deploy/.pm2/logs/backend-combined.log',
      time: true,
      watch: false,
      max_memory_restart: '1G',
      restart_delay: 4000,
      max_restarts: 10,
      min_uptime: '10s'
    }
    // Frontend is served by nginx directly from /var/www/jas-technologies/dist
    // No need for PM2 to manage frontend when using nginx
  ]
};
