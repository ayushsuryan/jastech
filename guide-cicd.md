# Complete CI/CD Guide for Full-Stack Applications

This guide provides step-by-step instructions for setting up a complete CI/CD pipeline for a full-stack application (React + Node.js) with automatic deployment to a VPS, including SSL configuration.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [VPS Setup](#vps-setup)
3. [Domain Configuration](#domain-configuration)
4. [SSL Certificate Setup](#ssl-certificate-setup)
5. [GitHub Actions Configuration](#github-actions-configuration)
6. [Application Configuration](#application-configuration)
7. [Deployment Process](#deployment-process)
8. [Monitoring and Maintenance](#monitoring-and-maintenance)
9. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Tools
- Ubuntu VPS (20.04 or later)
- Domain name with DNS access
- GitHub repository
- SSH access to VPS
- Basic knowledge of Linux commands

### Domain Setup
- `jas-technologies.in` - Frontend
- `api.jas-technologies.in` - Backend API
- `www.jas-technologies.in` - Redirect to main domain

## VPS Setup

### Step 1: Connect to Your VPS

```bash
ssh root@your-vps-ip
# or
ssh username@your-vps-ip
```

### Step 2: Create a Non-Root User (Recommended)

```bash
# Create new user
adduser deploy
usermod -aG sudo deploy

# Switch to new user
su - deploy
```

### Step 3: Update System

```bash
sudo apt update && sudo apt upgrade -y
```

### Step 4: Install Required Packages

```bash
# Install essential packages
sudo apt install -y curl wget git nginx certbot python3-certbot-nginx ufw fail2ban

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Docker (Optional but recommended)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### Step 5: Configure Firewall

```bash
# Configure UFW firewall
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable

# Configure fail2ban for additional security
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

## Domain Configuration

### Step 1: Configure DNS Records

In your domain registrar's DNS settings, add these records:

```
Type: A
Name: @
Value: YOUR_VPS_IP
TTL: 300

Type: A
Name: www
Value: YOUR_VPS_IP
TTL: 300

Type: A
Name: api
Value: YOUR_VPS_IP
TTL: 300
```

### Step 2: Verify DNS Propagation

```bash
# Check if DNS is propagated
nslookup jas-technologies.in
nslookup api.jas-technologies.in
nslookup www.jas-technologies.in
```

## SSL Certificate Setup

### Step 1: Install Certbot

```bash
sudo apt install certbot python3-certbot-nginx
```

### Step 2: Get SSL Certificates

```bash
# Get certificates for all domains
sudo certbot --nginx -d jas-technologies.in -d www.jas-technologies.in -d api.jas-technologies.in --non-interactive --agree-tos --email your-email@example.com
```

### Step 3: Set Up Auto-Renewal

```bash
# Test auto-renewal
sudo certbot renew --dry-run

# Add to crontab for automatic renewal
sudo crontab -e
# Add this line:
# 0 12 * * * /usr/bin/certbot renew --quiet
```

## GitHub Actions Configuration

### Step 1: Generate SSH Key for Deployment

```bash
# Create deploy user if it doesn't exist
sudo adduser deploy
sudo usermod -aG sudo deploy

# Create SSH directory for deploy user
sudo mkdir -p /home/deploy/.ssh
sudo chown -R deploy:deploy /home/deploy/.ssh
sudo chmod 700 /home/deploy/.ssh

# Generate SSH key for deploy user
sudo -u deploy ssh-keygen -t rsa -b 4096 -C "suryanayush@gmail.com" -f /home/deploy/.ssh/github_actions

# Add public key to authorized_keys
sudo -u deploy cat /home/deploy/.ssh/github_actions.pub >> /home/deploy/.ssh/authorized_keys
sudo chmod 600 /home/deploy/.ssh/authorized_keys

# Get the private key for GitHub secrets
sudo -u deploy cat /home/deploy/.ssh/github_actions
```

### Step 2: Configure GitHub Secrets

In your GitHub repository, go to Settings > Secrets and variables > Actions, add:

- `VPS_HOST`: Your VPS IP address
- `VPS_USERNAME`: Your VPS username (e.g., `deploy`)
- `VPS_SSH_KEY`: Content of the private key file

### Step 3: Update GitHub Actions Workflow

The workflow file `.github/workflows/deploy.yml` is already configured. Make sure to update the repository URL in the script.

## Application Configuration

### Step 1: Clone Repository

```bash
# Create application directory
sudo mkdir -p /var/www/jas-technologies
sudo chown -R $USER:$USER /var/www/jas-technologies

# Clone repository
cd /var/www/jas-technologies
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git .
```

### Step 2: Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### Step 3: Build Application

```bash
# Build frontend
npm run build
```

### Step 4: Configure Environment Variables

```bash
# Copy environment file
cp env.example .env

# Edit environment variables
nano .env
```

### Step 5: Create Systemd Services

#### Frontend Service

```bash
sudo nano /etc/systemd/system/jas-frontend.service
```

```ini
[Unit]
Description=Jas Technologies Frontend
After=network.target

[Service]
Type=simple
User=deploy
WorkingDirectory=/var/www/jas-technologies
ExecStart=/usr/bin/npm run preview
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

#### Backend Service

```bash
sudo nano /etc/systemd/system/jas-backend.service
```

```ini
[Unit]
Description=Jas Technologies Backend
After=network.target

[Service]
Type=simple
User=deploy
WorkingDirectory=/var/www/jas-technologies/backend
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

### Step 6: Enable and Start Services

```bash
# Reload systemd
sudo systemctl daemon-reload

# Enable services
sudo systemctl enable jas-frontend
sudo systemctl enable jas-backend

# Start services
sudo systemctl start jas-frontend
sudo systemctl start jas-backend
```

## Nginx Configuration

### Step 1: Configure Nginx

The nginx configuration is already provided in `nginx/nginx.conf`. Copy it to your server:

```bash
sudo cp nginx/nginx.conf /etc/nginx/nginx.conf
```

### Step 2: Test and Reload Nginx

```bash
# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

## Deployment Process

### Automatic Deployment

Once everything is set up, deployment happens automatically when you push to the main branch:

1. Push code to GitHub
2. GitHub Actions triggers
3. Code is built and tested
4. SSH connection to VPS is established
5. Code is pulled and deployed
6. Services are restarted

### Manual Deployment

If you need to deploy manually:

```bash
# On your VPS
cd /var/www/jas-technologies
git pull origin main
npm install
npm run build
cd backend && npm install && cd ..
sudo systemctl restart jas-frontend
sudo systemctl restart jas-backend
sudo systemctl reload nginx
```

## Monitoring and Maintenance

### Check Service Status

```bash
# Check all services
sudo systemctl status jas-frontend jas-backend nginx

# Check logs
sudo journalctl -u jas-frontend -f
sudo journalctl -u jas-backend -f
sudo journalctl -u nginx -f
```

### Monitor Resources

```bash
# Check system resources
htop
df -h
free -h

# Check nginx access logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Backup Strategy

```bash
# Create backup script
nano backup.sh
```

```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/jas-technologies"
mkdir -p $BACKUP_DIR

# Backup application
tar -czf $BACKUP_DIR/app_$DATE.tar.gz /var/www/jas-technologies

# Backup nginx config
cp /etc/nginx/nginx.conf $BACKUP_DIR/nginx_$DATE.conf

# Backup SSL certificates
cp -r /etc/letsencrypt $BACKUP_DIR/ssl_$DATE

# Keep only last 7 days of backups
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
```

```bash
# Make executable and add to crontab
chmod +x backup.sh
crontab -e
# Add: 0 2 * * * /path/to/backup.sh
```

## Troubleshooting

### Common Issues

#### 1. Services Not Starting

```bash
# Check service status
sudo systemctl status jas-frontend
sudo systemctl status jas-backend

# Check logs
sudo journalctl -u jas-frontend --no-pager
sudo journalctl -u jas-backend --no-pager
```

#### 2. SSL Certificate Issues

```bash
# Check certificate status
sudo certbot certificates

# Renew certificates manually
sudo certbot renew

# Check nginx SSL configuration
sudo nginx -t
```

#### 3. Port Conflicts

```bash
# Check what's using ports
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
sudo netstat -tlnp | grep :3000
```

#### 4. Permission Issues

```bash
# Fix ownership
sudo chown -R deploy:deploy /var/www/jas-technologies

# Fix permissions
sudo chmod -R 755 /var/www/jas-technologies
```

### Log Locations

- Application logs: `sudo journalctl -u jas-frontend -f`
- Backend logs: `sudo journalctl -u jas-backend -f`
- Nginx logs: `/var/log/nginx/access.log`, `/var/log/nginx/error.log`
- System logs: `/var/log/syslog`

### Performance Optimization

#### 1. Enable Gzip Compression

Already configured in nginx.conf

#### 2. Set Up Caching

```nginx
# Add to nginx.conf
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

#### 3. Database Optimization (if applicable)

- Use connection pooling
- Implement proper indexing
- Regular maintenance tasks

## Security Best Practices

### 1. Regular Updates

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Update Node.js packages
npm audit fix
```

### 2. Firewall Configuration

```bash
# Check UFW status
sudo ufw status

# Block unnecessary ports
sudo ufw deny 3000  # If not needed externally
```

### 3. SSL Security

- Use strong SSL configurations
- Regular certificate renewal
- HSTS headers (already configured)

### 4. Application Security

- Use environment variables for secrets
- Implement proper CORS policies
- Regular security audits

## Scaling Considerations

### 1. Load Balancing

For high traffic, consider:
- Multiple VPS instances
- Load balancer (HAProxy, Nginx)
- CDN for static assets

### 2. Database Scaling

- Separate database server
- Read replicas
- Caching layer (Redis)

### 3. Monitoring

- Application monitoring (New Relic, DataDog)
- Server monitoring (Nagios, Zabbix)
- Log aggregation (ELK Stack)

## Conclusion

This guide provides a complete CI/CD setup for your full-stack application. The setup includes:

- ✅ Automatic deployment on git push
- ✅ SSL certificates with auto-renewal
- ✅ Reverse proxy with Nginx
- ✅ Process management with systemd
- ✅ Security hardening
- ✅ Monitoring and logging

Your application will be available at:
- Frontend: `https://jas-technologies.in`
- Backend: `https://api.jas-technologies.in`

Remember to:
1. Replace placeholder values with your actual information
2. Test the setup thoroughly
3. Monitor logs and performance
4. Keep everything updated
5. Implement proper backup strategies

For any issues, check the troubleshooting section or refer to the official documentation of the tools used.
