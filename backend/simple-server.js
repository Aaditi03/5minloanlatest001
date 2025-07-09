require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

// Basic middleware
app.use(express.json());

// Debug middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  next();
});

// CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Test route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  console.log('Received request body:', req.body);
  
  // Validate request
  if (!req.body) {
    return res.status(400).json({ error: 'No request body' });
  }

  try {
    // Format the email data
    const emailData = {
      from: {
        address: process.env.FROM_EMAIL
      },
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

    console.log('Sending email with data:', JSON.stringify(emailData, null, 2));

    // Send email using ZeptoMail
    const response = await axios({
      method: 'post',
      url: 'https://api.zeptomail.in/v1.1/email',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Zoho-enczapikey ${process.env.ZEPTO_API_KEY}`
      },
      data: emailData
    });

    console.log('ZeptoMail API Response Status:', response.status);
    console.log('ZeptoMail API Response Headers:', response.headers);
    console.log('ZeptoMail API Response Data:', response.data);

    if (response.status === 200 || response.status === 201) {
      res.json({
        message: 'Email sent successfully',
        data: response.data
      });
    } else {
      throw new Error('Unexpected response from ZeptoMail API');
    }
  } catch (error) {
    console.error('Error sending email:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers
    });
    
    res.status(500).json({
      error: 'Failed to send email',
      details: error.response?.data || error.message
    });
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Available endpoints:');
  console.log('- GET  /');
  console.log('- POST /api/send-email');
}); 