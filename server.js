const express = require('express');
const path = require('path');
const { execSync } = require('child_process');
const crypto = require('crypto');
const app = express();
const PORT = process.env.PORT || 3000;

// Webhook secret 
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'your-secret-key-here';

// Middleware for parsing JSON
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Webhook endpoint
app.post('/webhook', (req, res) => {
    try {
        // Verify GitHub signature (security)
        const signature = req.headers['x-hub-signature-256'];
        const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
        const digest = 'sha256=' + hmac.update(JSON.stringify(req.body)).digest('hex');
        
        if (signature !== digest) {
            console.log('❌ Invalid webhook signature');
            return res.status(401).send('Unauthorized');
        }

        console.log('✅ Webhook received and verified');
        console.log('Event:', req.headers['x-github-event']);
        
        // Only deploy on push events to main branch
        if (req.headers['x-github-event'] === 'push' && req.body.ref === 'refs/heads/master') {
            console.log('🚀 Triggering deployment...');
            
            // Run deployment script in background
            setTimeout(() => {
                try {
                    execSync('~/deploy-portfolio.sh', { stdio: 'inherit' });
                    console.log('✅ Deployment completed successfully');
                } catch (error) {
                    console.error('❌ Deployment failed:', error.message);
                }
            }, 1000);
            
            res.status(200).send('Deployment triggered');
        } else {
            res.status(200).send('Event ignored');
        }
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
