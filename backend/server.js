// backend/service.js
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import axios from "axios";
import { join } from "path";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();
app.set("trust proxy", true);

// Middleware
const corsOption = {
  origin: [
    "https://5minuteloan.com",
    "http://localhost:5173",
    "http://localhost:3002",
    "https://www.5minuteloan.com",
    "https://api.5minuteloan.com"
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.static(join(process.cwd(), "public")));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Contact form endpoint
app.post('/contact-api/send-email', async (req, res) => {
  console.log('Received request body:', req.body);

  if (!req.body) {
    return res.status(400).json({ error: 'No request body' });
  }

  try {
    const emailData = {
      from: {
        address: "noreply@5minuteloan.com"
      },
      to: [
        {
          email_address: {
            address: process.env.TO_EMAIL || "tech@speedoloan.com",
            name: "Agrim"
          }
        }
      ],
      subject: `[Contact Form] ${req.body.subject}`,
      htmlbody: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> ${req.body.name}</p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> ${req.body.email}</p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Phone:</strong> ${req.body.phone}</p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Subject:</strong> ${req.body.subject}</p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${req.body.message}</p>
          </div>
        </div>
      `
    };

    console.log("Sending request to ZeptoMail...");
    const response = await axios.post('https://api.zeptomail.in/v1.1/email', emailData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Zoho-enczapikey ${process.env.ZEPTO_API_KEY}`
      },
      timeout: 10000 // 10 seconds timeout
    });

    console.log("ZeptoMail response status:", response.status);

    res.json({
      message: 'Email sent successfully',
      data: response.data
    });
  } catch (error) {
    console.error('Error sending email:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });

    res.status(500).json({
      error: 'Failed to send email',
      details: error.response?.data || error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something broke!',
    message: NODE_ENV === 'production' ? 'Internal server error' : err.message
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT} in ${NODE_ENV} mode`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please try a different port.`);
  } else {
    console.error('Error starting server:', err);
  }
  process.exit(1);
});
