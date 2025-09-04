# JAS Technologies - Deployment Guide

## 🚀 **Performance Optimizations Included**

This repository now includes all performance optimizations for Google Lighthouse 90+ score:

### ✅ **Frontend Optimizations**
- **Image Optimization**: WebP support with fallbacks
- **Lazy Loading**: All images load on demand
- **Critical CSS**: Inline critical styles
- **Font Optimization**: Reduced font weights and preconnect hints
- **Service Worker**: Offline caching
- **Resource Hints**: Preconnect and DNS prefetch

### ✅ **Nginx Optimizations**
- **Enhanced Gzip**: Better compression for all file types
- **Cache Headers**: 1 year for static assets, 1 hour for HTML
- **Service Worker**: No cache for always fresh updates
- **Security Headers**: Complete security configuration

## 📋 **Deployment Process**

### 1. **Build the Application**
```bash
# Install dependencies
npm install

# Build for production
npm run build

# The dist folder will contain optimized assets
```

### 2. **Deploy to Server**
```bash
# Copy built files to server
scp -r dist/* user@your-server:/var/www/jas-technologies/dist/

# Copy nginx configuration
scp nginx/nginx.conf user@your-server:/etc/nginx/sites-available/jas-technologies
```

### 3. **Update Server Configuration**
```bash
# On the server, test nginx configuration
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx

# Check nginx status
sudo systemctl status nginx
```

### 4. **Verify Performance Optimizations**
```bash
# Test compression
curl -H "Accept-Encoding: gzip" -I https://jas-technologies.in

# Test cache headers
curl -I https://jas-technologies.in/logo.png

# Test service worker
curl -I https://jas-technologies.in/sw.js
```

## 🔧 **CI/CD Integration**

### **GitHub Actions / GitLab CI**
```yaml
# Example deployment step
- name: Deploy to Server
  run: |
    # Build application
    npm run build
    
    # Copy files to server
    rsync -avz --delete dist/ user@server:/var/www/jas-technologies/dist/
    
    # Update nginx config
    scp nginx/nginx.conf user@server:/etc/nginx/sites-available/jas-technologies
    
    # Reload nginx
    ssh user@server "sudo nginx -t && sudo systemctl reload nginx"
```

### **PM2 Deployment**
```bash
# If using PM2 for backend
pm2 restart your-backend-app

# Check PM2 status
pm2 status
```

## 📊 **Expected Performance Results**

After deployment, you should see:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Mobile Performance** | 80 | 90+ | +10+ points |
| **Mobile Accessibility** | 84 | 95+ | +11+ points |
| **Cache Headers** | ❌ | ✅ | Fixed |
| **Image Optimization** | ❌ | ✅ | WebP + Lazy Loading |
| **Compression** | Basic | Enhanced | 60-70% reduction |

## 🎯 **Key Files to Monitor**

### **Critical Files for Performance**
- `index.html` - Critical CSS and resource hints
- `public/sw.js` - Service worker for caching
- `nginx/nginx.conf` - Server optimizations
- `public/sitemap.xml` - SEO sitemap
- `public/robots.txt` - Search engine directives

### **Image Files**
- Convert large images to WebP format
- Ensure proper sizing for mobile devices
- Use lazy loading for below-the-fold images

## 🔍 **Monitoring & Maintenance**

### **Performance Monitoring**
```bash
# Check nginx access logs
sudo tail -f /var/log/nginx/access.log

# Check nginx error logs
sudo tail -f /var/log/nginx/error.log

# Monitor server resources
htop
```

### **Regular Maintenance**
1. **Update dependencies** monthly
2. **Monitor Lighthouse scores** weekly
3. **Check cache hit rates** in nginx logs
4. **Update service worker** when needed

## 🚨 **Troubleshooting**

### **Common Issues**
1. **Service Worker 404**: Ensure `sw.js` is in the dist folder
2. **Cache not working**: Check nginx configuration syntax
3. **Images not optimized**: Verify WebP conversion
4. **Performance still low**: Check for large unoptimized assets

### **Quick Fixes**
```bash
# Restart nginx
sudo systemctl restart nginx

# Clear browser cache
# Hard refresh: Ctrl+Shift+R

# Check file permissions
sudo chown -R www-data:www-data /var/www/jas-technologies/
```

## 📈 **Performance Targets**

- **Lighthouse Performance**: 90+
- **First Contentful Paint**: <2s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3s

---

**Note**: This deployment guide ensures all performance optimizations are preserved across deployments. The nginx configuration includes both production and development setups for flexibility.
