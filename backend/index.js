const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
connectDB();

// List of allowed origins (no '*')
const allowedOrigins = [
  'https://jas-technologies.in',
  'https://www.jas-technologies.in',
  'https://api.jas-technologies.in',
  'http://localhost:5173'
];

// CORS options
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check route
app.get('/status', (req, res) => {
  res.json({
    status: 'running',
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
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ success: false, message: 'CORS policy violation' });
  }
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server listening on http://localhost:${port}`);
  console.log(`🌐 Allowed origins: ${allowedOrigins.join(', ')}`);
});
