# CORS Troubleshooting Guide

## 🔧 **Issues Fixed**

### 1. **Backend CORS Configuration**
- ✅ Removed invalid `'*'` from allowedOrigins array
- ✅ Added environment variable support for CORS_ORIGIN
- ✅ Proper origin validation logic

### 2. **Nginx Configuration**
- ✅ Removed conflicting CORS headers from nginx
- ✅ Let backend handle CORS properly
- ✅ Clean proxy configuration

### 3. **Environment Configuration**
- ✅ Created `env.production` and `env.development` files
- ✅ Proper API URL configuration
- ✅ CORS origin configuration

## 🚀 **Deployment Steps**

### **1. Set Environment Variables**
```bash
# For production
export NODE_ENV=production
export VITE_API_URL=https://api.jas-technologies.in
export CORS_ORIGIN=https://jas-technologies.in
```

### **2. Deploy with Docker**
```bash
# Make script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### **3. Manual Deployment**
```bash
# Build frontend
npm run build

# Start services
docker-compose up -d
```

## 🔍 **CORS Configuration Details**

### **Backend (api.jas-technologies.in)**
- **Allowed Origins**: 
  - `https://jas-technologies.in`
  - `https://www.jas-technologies.in`
  - `https://api.jas-technologies.in`
  - Environment variable `CORS_ORIGIN`

### **Frontend (jas-technologies.in)**
- **API Base URL**: `https://api.jas-technologies.in`
- **Environment Variable**: `VITE_API_URL`

## 🛠️ **Testing CORS**

### **1. Test API Directly**
```bash
curl -H "Origin: https://jas-technologies.in" \
     -H "Access-Control-Request-Method: POST" \
     -H "Access-Control-Request-Headers: Content-Type" \
     -X OPTIONS \
     https://api.jas-technologies.in/api/contacts
```

### **2. Test from Browser Console**
```javascript
fetch('https://api.jas-technologies.in/api/contacts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Test',
    email: 'test@example.com',
    message: 'Test message'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

## 🐛 **Common CORS Issues & Solutions**

### **Issue 1: "Access to fetch at 'api.jas-technologies.in' from origin 'jas-technologies.in' has been blocked by CORS policy"**

**Solution**: 
- Check if backend is running on `api.jas-technologies.in`
- Verify CORS origins in backend configuration
- Ensure nginx is not adding conflicting CORS headers

### **Issue 2: "Preflight request doesn't pass access control check"**

**Solution**:
- Check if OPTIONS method is allowed in backend
- Verify CORS headers are properly set
- Ensure preflight response includes all required headers

### **Issue 3: "Response to preflight request doesn't pass access control check"**

**Solution**:
- Check if backend is responding to OPTIONS requests
- Verify CORS middleware is properly configured
- Check nginx proxy configuration

## 📊 **Monitoring & Debugging**

### **Backend Logs**
```bash
# Docker logs
docker-compose logs -f backend

# PM2 logs (if using PM2)
pm2 logs jas-backend
```

### **Nginx Logs**
```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```

### **Browser Network Tab**
1. Open Developer Tools (F12)
2. Go to Network tab
3. Look for OPTIONS request to `/api/contacts`
4. Check response headers for CORS headers

## 🔒 **Security Considerations**

### **Production CORS Settings**
- ✅ Specific origins only (no wildcards)
- ✅ Credentials support if needed
- ✅ Proper preflight handling
- ✅ Security headers in nginx

### **Environment Variables**
- ✅ Use environment-specific configurations
- ✅ Never hardcode sensitive data
- ✅ Use proper .env files

## 📝 **Quick Commands**

```bash
# Check if services are running
docker-compose ps

# Restart all services
docker-compose restart

# View real-time logs
docker-compose logs -f

# Rebuild and restart
docker-compose up -d --build

# Stop all services
docker-compose down
```

## 🎯 **Expected Behavior**

After deployment:
1. Frontend at `https://jas-technologies.in` should load
2. API calls should go to `https://api.jas-technologies.in`
3. Contact form should work without CORS errors
4. Browser console should show no CORS-related errors

---

**Note**: Make sure your DNS is properly configured to point:
- `jas-technologies.in` → Frontend server
- `api.jas-technologies.in` → Backend server
