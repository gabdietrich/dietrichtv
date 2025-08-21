# Portfolio Website Deployment Guide

This guide provides multiple hosting options for your dietrich.tv studio portfolio website.

## 🚀 Quick Start Options

### Option 1: Netlify (Recommended for beginners)
1. Push your code to GitHub
2. Connect your GitHub repo to [Netlify](https://netlify.com)
3. Netlify will automatically build and deploy using `netlify.toml`
4. Your site will be live at `https://[site-name].netlify.app`

### Option 2: Vercel (Great for React apps)
1. Push your code to GitHub
2. Connect your GitHub repo to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy using `vercel.json`
4. Your site will be live at `https://[project-name].vercel.app`

### Option 3: GitHub Pages
1. Push your code to GitHub
2. Enable GitHub Actions in your repo
3. The `.github/workflows/deploy.yml` will automatically deploy on push to main
4. Enable GitHub Pages in repo settings
5. Your site will be live at `https://[username].github.io/[repo-name]`

### Option 4: Self-Hosting with Docker
```bash
# Build Docker image
docker build -t portfolio-website .

# Run container
docker run -p 3000:3000 portfolio-website
```

### Option 5: Traditional Server (VPS/Dedicated)
```bash
# On your server
git clone [your-repo]
cd Portfolio\ Website
npm install
npm run build
npm start
```

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Start production server
npm run serve
```

## 🌐 Custom Domain Setup

### For Netlify/Vercel:
1. Add your domain in the platform's dashboard
2. Update your DNS to point to their servers
3. SSL certificates are automatically provisioned

### For Self-Hosting:
1. Point your domain's A record to your server IP
2. Set up SSL with Let's Encrypt:
```bash
sudo certbot --nginx -d yourdomain.com
```

## 📊 Performance Optimization

The build includes:
- ✅ Gzip compression
- ✅ Asset caching (1 year)
- ✅ Code splitting
- ✅ Tree shaking
- ✅ CSS optimization
- ✅ Security headers

## 🔒 Security Features

- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy
- HTTPS enforcement

## 📝 Environment Variables

Create `.env.local` for local development:
```
VITE_API_URL=your-api-url
VITE_ANALYTICS_ID=your-analytics-id
```

## 🚨 Troubleshooting

### Build Issues:
- Check Node.js version (requires v16+)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### Deployment Issues:
- Ensure build directory is correct in config files
- Check that all dependencies are in package.json
- Verify environment variables are set

## 📞 Support

For deployment help, contact: contact@dietrich.tv
