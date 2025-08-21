const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:", "blob:"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"],
      mediaSrc: ["'self'", "https:"],
      frameSrc: ["'self'", "https://player.vimeo.com"]
    }
  }
}));

// Compression middleware
app.use(compression());

// Serve static files from build directory
app.use(express.static(path.join(__dirname, 'build'), {
  maxAge: '1y',
  etag: false
}));

// Handle React Router - send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio website is running on port ${PORT}`);
  console.log(`📱 Local: http://localhost:${PORT}`);
  console.log(`🌐 Network: http://[your-ip]:${PORT}`);
});

module.exports = app;
