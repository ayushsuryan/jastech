const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');
const contactRoutes = require('./routes/contactRoutes');
const app = express();
const port = process.env.PORT || 3000;

connectDB();

const allowedOrigins = [
  'https://jas-technologies.in',
  'https://www.jas-technologies.in',
  'https://api.jas-technologies.in',
  process.env.CORS_ORIGIN
].filter(Boolean); // Remove undefined values

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    console.log('CORS request from origin:', origin);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      console.log('CORS: Origin allowed');
      callback(null, true);
    } else {
      console.log('CORS: Origin blocked:', origin);
      console.log('CORS: Allowed origins:', allowedOrigins);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


app.get('/status', (req, res) => {
  res.json({ 
    status: 'running', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  });
});

app.use('/api/contacts', contactRoutes);



app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      success: false,
      message: 'CORS policy violation'
    });
  }
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

app.listen(port, () => {
  console.log(`🚀 Backend API listening at http://localhost:${port}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Allowed origins: ${allowedOrigins.join(', ')}`);
});