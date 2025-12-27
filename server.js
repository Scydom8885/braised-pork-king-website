// Braised Pork King - Official Website Server
// Created: September 17, 2025
// Following LEGO reuse principle and food-stall operational mindset

// Load environment variables
require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Braised Pork King - Authentic Taiwanese Royal Cuisine',
        page: 'home',
        businessPhone: process.env.WHATSAPP_PHONE || '60128533050'
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About Us - Braised Pork King',
        page: 'about',
        businessPhone: process.env.WHATSAPP_PHONE || '60128533050'
    });
});

app.get('/franchise', (req, res) => {
    res.render('pages/franchise', {
        title: 'Franchise Opportunities - Braised Pork King',
        page: 'franchise',
        businessPhone: process.env.WHATSAPP_PHONE || '60128533050'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// 404 handler - catch all routes
app.use((req, res) => {
    res.status(404).render('pages/404', {
        title: '404 - Page Not Found - Braised Pork King',
        page: '404',
        businessPhone: process.env.WHATSAPP_PHONE || '60128533050'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('pages/error', {
        title: 'Error - Braised Pork King',
        page: 'error',
        error: process.env.NODE_ENV === 'development' ? err : {},
        businessPhone: process.env.WHATSAPP_PHONE || '60128533050'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🍛 Braised Pork King server running on http://localhost:${PORT}`);
    console.log(`📱 WhatsApp: ${process.env.WHATSAPP_PHONE || '60128533050'}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;