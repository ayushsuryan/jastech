#!/bin/bash

# Deployment Script for Jas Technologies
# This script is run by GitHub Actions

set -e

echo "🚀 Starting deployment..."

# Navigate to project directory
cd /var/www/jas-technologies

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install

# Build frontend
echo "🏗️ Building frontend..."
npm run build

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Restart services
echo "🔄 Restarting services..."
sudo systemctl restart jas-frontend
sudo systemctl restart jas-backend
sudo systemctl reload nginx

# Check service status
echo "✅ Checking service status..."
sudo systemctl status jas-frontend --no-pager
sudo systemctl status jas-backend --no-pager

echo "🎉 Deployment completed successfully!"
