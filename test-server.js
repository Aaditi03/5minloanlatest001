const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Test successful' });
});

// Test POST endpoint
app.post('/test', (req, res) => {
  res.json({ received: req.body });
});

app.listen(3001, () => {
  console.log('Test server running on http://localhost:3001');
}); 