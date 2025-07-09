require('dotenv').config();
const express = require('express');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { body, validationResult } = require('express-validator');
const app = express();

// Validate required environment variables
const requiredEnvVars = ['TO_EMAIL', 'ZEPTO_API_KEY'];
requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    console.error(`Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
});

// Security middleware
app.use(helmet());
app.use(express.json({ limit: '10kb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (corsOptions.origin === '*' || corsOptions.origin.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin || '*');
    res.header('Access-Control-Allow-Methods', corsOptions.methods.join(','));
    res.header('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(','));
    res.header('Access-Control-Allow-Credentials', corsOptions.credentials.toString());
  }

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Email validation rules
const emailValidationRules = [
  body('name').notEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').optional().isMobilePhone(),
  body('subject').notEmpty().trim().escape(),
  body('message').notEmpty().trim().escape()
];

// Email router
const router = express.Router();

router.post('/send-email', emailValidationRules, async (req, res) => {
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const emailData = {
      from: { address: "noreply@5minuteloan.com" },
      to: [{
        email_address: {
          address: process.env.TO_EMAIL,
          name: "Agrim Care Team"
        }
      }],
      subject: `[Contact Form] ${req.body.subject}`,
      htmlbody: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
            ${Object.entries(req.body).map(([key, value]) => 
              `<p style="margin: 10px 0;"><strong style="color: #555;">${key}:</strong> ${value}</p>`
            ).join('')}
          </div>
        </div>
      `
    };

    const response = await axios({
      method: 'post',
      url: 'https://api.zeptomail.in/v1.1/email',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Zoho-enczapikey ${process.env.ZEPTO_API_KEY}`
      },
      data: emailData,
      timeout: 5000 // 5 second timeout
    });

    res.status(response.status).json({
      success: true,
      message: 'Email sent successfully',
      data: response.data
    });

  } catch (error) {
    const status = error.response?.status || 500;
    const errorData = error.response?.data || { message: error.message };
    
    console.error('Email sending failed:', {
      status,
      error: errorData,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });

    res.status(status).json({
      success: false,
      error: 'Failed to send email',
      details: errorData
    });
  }
});

app.use('/api', router);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { details: err.message })
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment:', process.env.NODE_ENV || 'development');
});