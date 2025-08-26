const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON (for webhooks)
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Main route - serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Webhook endpoint (we'll configure this later)
app.post('/webhook', (req, res) => {
    console.log('Webhook received:', req.body);
    // TODO: Add deployment logic later
    res.status(200).send('Webhook received');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
