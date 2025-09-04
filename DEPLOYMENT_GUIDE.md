# JAS Technologies - Deployment Guide

## 🚀 Production Environment Setup

### **Environment Files**

#### **Development (`env.development`)**
```bash
NODE_ENV=development
VITE_API_URL=http://localhost:3000
PORT=3000
CORS_ORIGIN=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/jastech_contacts
```

#### **Production (`env.production`)**
```bash
NODE_ENV=production
VITE_API_URL=https://api.jas-technologies.in
PORT=3000
CORS_ORIGIN=https://jas-technologies.in
MONGODB_URI=mongodb+srv://ayush:<db_password>@cluster0.6rwkptj.mongodb.net/jastech_contacts
SSL_CERT_PATH=/etc/nginx/ssl
SSL_KEY_PATH=/etc/nginx/ssl
```

## 🛠️ **Development Setup**

### **1. Start Backend (Development)**
```bash
cd backend
npm install
npm start
# Backend runs on http://localhost:3000
```

### **2. Start Frontend (Development)**
```bash
npm install
npm run dev
# Frontend runs on http://localhost:5173
```

## 🌐 **Production Deployment**

### **1. Backend Deployment**

#### **Using PM2 (Recommended)**
```bash
# Install PM2 globally
npm install -g pm2

# Set production environment
export NODE_ENV=production

# Start backend with PM2
cd backend
pm2 start index.js --name "jas-backend" --env production

# Save PM2 configuration
pm2 save
pm2 startup
```

#### **Using Docker**
```bash
# Build backend image
docker build -f Dockerfile.backend -t jas-backend .

# Run backend container
docker run -d \
  --name jas-backend \
  --env-file env.production \
  -p 3000:3000 \
  jas-backend
```

### **2. Frontend Deployment**

#### **Build for Production**
```bash
# Set production environment
export NODE_ENV=production

# Build frontend
npm run build
# Output: dist/ folder
```

#### **Deploy to Nginx**
```bash
# Copy built files to nginx directory
sudo cp -r dist/* /var/www/html/

# Update nginx configuration
sudo nano /etc/nginx/sites-available/jas-technologies
```

#### **Nginx Configuration**
```nginx
server {
    listen 80;
    server_name jas-technologies.in www.jas-technologies.in;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name jas-technologies.in www.jas-technologies.in;
    
    root /var/www/html;
    index index.html;
    
    # SSL Configuration
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    
    # Frontend routes
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # API proxy
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔧 **Environment Variables**

### **Frontend (.env files)**
- `VITE_API_URL` - Backend API URL
- `NODE_ENV` - Environment (development/production)

### **Backend (.env files)**
- `NODE_ENV` - Environment
- `PORT` - Server port
- `CORS_ORIGIN` - Allowed CORS origins
- `MONGODB_URI` - Database connection string
- `SSL_CERT_PATH` - SSL certificate path (production)
- `SSL_KEY_PATH` - SSL private key path (production)

## 📊 **Database Setup**

### **MongoDB Atlas (Production)**
1. Create cluster on MongoDB Atlas
2. Get connection string
3. Update `MONGODB_URI` in `env.production`
4. Whitelist server IP addresses

### **Local MongoDB (Development)**
1. Install MongoDB locally
2. Start MongoDB service
3. Use `mongodb://localhost:27017/jastech_contacts`

## 🔒 **Security Considerations**

### **Production Security**
- Use HTTPS everywhere
- Set up proper CORS origins
- Use environment variables for secrets
- Enable MongoDB authentication
- Use PM2 for process management
- Set up proper logging
- Configure firewall rules

### **SSL Certificate Setup**
```bash
# Using Let's Encrypt (Certbot)
sudo certbot --nginx -d jas-technologies.in -d www.jas-technologies.in

# Or upload your own certificates to /etc/nginx/ssl/
```

## 🚀 **Quick Deploy Commands**

### **Development**
```bash
# Backend
cd backend && npm start

# Frontend
npm run dev
```

### **Production**
```bash
# Backend
NODE_ENV=production cd backend && pm2 start index.js --name jas-backend

# Frontend
NODE_ENV=production npm run build
sudo cp -r dist/* /var/www/html/
sudo systemctl reload nginx
```

## 📝 **Monitoring**

### **PM2 Monitoring**
```bash
# View processes
pm2 list

# View logs
pm2 logs jas-backend

# Restart service
pm2 restart jas-backend

# Stop service
pm2 stop jas-backend
```

### **Nginx Logs**
```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```

## 🔄 **Updates & Maintenance**

### **Update Backend**
```bash
cd backend
git pull
npm install
pm2 restart jas-backend
```

### **Update Frontend**
```bash
git pull
npm install
npm run build
sudo cp -r dist/* /var/www/html/
```

---

**Note:** Make sure to replace `<db_password>` in the MongoDB URI with your actual database password before deploying to production.