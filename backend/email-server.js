// email-server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Log each request
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Email endpoint only
app.post('/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const emailData = {
      from: { address: process.env.FROM_EMAIL },
      to: [{
        email_address: {
          address: process.env.TO_EMAIL,
          name: "Agrim Care Team"
        }
      }],
      subject: `[Contact Form] ${subject}`,
      htmlbody: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    };

    const response = await axios.post('https://api.zeptomail.in/v1.1/email', emailData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Zoho-enczapikey ${process.env.ZEPTO_API_KEY}`
      }
    });

    res.json({ message: 'Email sent successfully', data: response.data });
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Email sending failed', details: err.response?.data || err.message });
  }
});

// Start the server on its own port
const PORT = process.env.EMAIL_PORT || 4001;
app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});
