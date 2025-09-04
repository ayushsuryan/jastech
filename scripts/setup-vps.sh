#!/bin/bash

# VPS Setup Script for Jas Technologies
# Run this script on your Ubuntu VPS

set -e

echo "🚀 Setting up VPS for Jas Technologies deployment..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install required packages
echo "🔧 Installing required packages..."
sudo apt install -y curl wget git nginx certbot python3-certbot-nginx ufw fail2ban

# Install Node.js 18
echo "📦 Installing Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Docker
echo "🐳 Installing Docker..."
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
echo "🐳 Installing Docker Compose..."
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Create application directory
echo "📁 Creating application directory..."
sudo mkdir -p /var/www/jas-technologies
sudo chown -R $USER:$USER /var/www/jas-technologies

# Clone repository
echo "📥 Cloning repository..."
cd /var/www/jas-technologies
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git .

# Install dependencies
echo "📦 Installing dependencies..."
npm install
cd backend && npm install && cd ..

# Configure firewall
echo "🔥 Configuring firewall..."
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable

# Configure fail2ban
echo "🛡️ Configuring fail2ban..."
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

# Create systemd services
echo "⚙️ Creating systemd services..."

# Frontend service
sudo tee /etc/systemd/system/jas-frontend.service > /dev/null <<EOF
[Unit]
Description=Jas Technologies Frontend
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=/var/www/jas-technologies
ExecStart=/usr/bin/npm run preview
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

# Backend service
sudo tee /etc/systemd/system/jas-backend.service > /dev/null <<EOF
[Unit]
Description=Jas Technologies Backend
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=/var/www/jas-technologies/backend
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

# Enable and start services
sudo systemctl daemon-reload
sudo systemctl enable jas-frontend jas-backend

# Configure Nginx
echo "🌐 Configuring Nginx..."
sudo cp nginx/nginx.conf /etc/nginx/nginx.conf
sudo systemctl enable nginx
sudo systemctl start nginx

# Get SSL certificates
echo "🔒 Getting SSL certificates..."
sudo certbot --nginx -d jas-technologies.in -d www.jas-technologies.in -d api.jas-technologies.in --non-interactive --agree-tos --email your-email@example.com

# Start services
echo "🚀 Starting services..."
sudo systemctl start jas-frontend
sudo systemctl start jas-backend
sudo systemctl reload nginx

echo "✅ VPS setup completed successfully!"
echo "🌐 Your application should now be available at:"
echo "   Frontend: https://jas-technologies.in"
echo "   Backend:  https://api.jas-technologies.in"
echo ""
echo "📝 Next steps:"
echo "1. Update your GitHub repository secrets"
echo "2. Test the deployment by pushing to main branch"
echo "3. Monitor logs with: sudo journalctl -u jas-frontend -f"
