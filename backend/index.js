const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

// Simple CORS configuration allowing all origins
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
}));

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check route
app.get('/status', (req, res) => {
  res.json({
    status: 'running 1 adasjdsajd',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  });
});

// API routes
app.use('/api/contacts', contactRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err.message);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server listening : on http://localhost:${port}`);
  console.log(`🌐 CORS enabled for all origins`);
});
