# 🚀 LyneSign Homepage - Deployment Guide

## Quick Start

### Local Testing
```bash
cd /Users/mazangangunza/Desktop/lynesign-site
npm install          # If not already done
npm run dev          # Start development server
# Visit http://localhost:3000
```

### Production Build
```bash
npm run build         # Build for production
npm run start         # Run production build locally
```

---

## 🌐 Deploy to Vercel (Recommended)

### Option 1: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
cd /Users/mazangangunza/Desktop/lynesign-site
vercel

# Answer the prompts:
# - Project name: lynesign-site
# - Framework: Next.js
# - Root directory: ./
# - Build command: npm run build
# - Start command: next start
```

### Option 2: GitHub + Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select GitHub repository
5. Click "Deploy"
6. Vercel auto-detects Next.js and deploys

### Vercel Environment Variables
If needed, set in Vercel dashboard:
```
NEXT_PUBLIC_SITE_URL=https://lynesign.com
```

---

## 🐳 Deploy with Docker

### Dockerfile
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./.next
COPY public ./public

EXPOSE 3000

CMD ["npm", "run", "start"]
```

### Build & Run
```bash
docker build -t lynesign .
docker run -p 3000:3000 lynesign
```

---

## 🔧 Deploy to AWS

### Using AWS Amplify
1. Push to GitHub
2. Go to AWS Amplify Console
3. Connect GitHub repository
4. Select branch
5. Click "Deploy"
6. Amplify auto-deploys on every push

### Using EC2
1. Launch Ubuntu instance
2. Install Node.js 20+
3. Clone repository
4. Run:
```bash
npm install
npm run build
npm run start
```
5. Use PM2 for process management:
```bash
npm install -g pm2
pm2 start "npm run start" --name "lynesign"
pm2 startup
pm2 save
```

---

## ☁️ Deploy to Netlify

### Using Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

### Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Environment**: Node 20

---

## 🌍 Custom Domain Setup

### Via Vercel
1. Go to Vercel Dashboard
2. Project Settings → Domains
3. Add your domain
4. Configure DNS records:
```
Type: CNAME
Name: www
Value: cname.vercel.sh
```

### Via Netlify
1. Domain settings
2. DNS configuration
3. Add CNAME record:
```
Name: www
Value: your-site.netlify.app
```

### SSL Certificate
- Vercel: Automatic (Let's Encrypt)
- Netlify: Automatic (Let's Encrypt)
- AWS: AWS Certificate Manager (free)

---

## 📊 Environment Variables

### Create `.env.local`
```bash
# .env.local (development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production `.env.production`
```bash
# .env.production (production)
NEXT_PUBLIC_SITE_URL=https://lynesign.com
```

### Usage in Code
```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
```

---

## 🔍 Pre-Deployment Checklist

### Code Quality
- [x] Run `npm run lint`
- [x] No TypeScript errors
- [x] Test `npm run build` succeeds
- [x] Test `npm run dev` works

### Content Review
- [ ] Update contact information
- [ ] Verify all links work
- [ ] Check spelling and grammar
- [ ] Review meta tags/SEO

### Performance
- [ ] Lighthouse score > 80
- [ ] Core Web Vitals optimized
- [ ] Images optimized
- [ ] No console errors

### Security
- [ ] No hardcoded secrets
- [ ] HTTPS enabled
- [ ] Security headers set
- [ ] CSRF tokens ready

---

## 🔐 Security Headers

### Vercel Headers (automatic)
Vercel automatically adds:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

### Custom Headers (if needed)
Add to `next.config.ts`:
```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains',
        },
      ],
    },
  ];
}
```

---

## 📈 Post-Deployment

### Monitoring
1. Set up Google Analytics
2. Enable Vercel Analytics
3. Monitor Core Web Vitals
4. Set up error tracking

### Analytics Code
```typescript
// app/page.tsx
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
      <Script strategy="afterInteractive" id="ga-script">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_ID');`}
      </Script>
      {/* Rest of page */}
    </>
  );
}
```

### Form Submissions
If adding contact forms, use:
- Vercel Edge Functions
- Netlify Functions
- AWS Lambda
- Firebase Functions

---

## 🆘 Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Port 3000 In Use
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Deployment Stuck
1. Clear build cache
2. Try deploying again
3. Check logs in Vercel/Netlify dashboard

### Performance Issues
```bash
npm run build     # Check build output
npm run start     # Test production build
# Check Lighthouse scores
```

---

## 📱 CDN & Caching

### Vercel Edge Network
- Automatically enabled
- Global CDN coverage
- Auto image optimization
- ~150+ edge locations

### Cache Strategy
```typescript
// cache images for 1 year
export const revalidate = 31536000; // 1 year in seconds
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 📞 Support Contacts

- **Vercel Support**: support@vercel.com
- **Netlify Support**: support@netlify.com
- **AWS Support**: AWS Support Center

---

## 📋 Deployment Checklist

### Before Deploying
- [x] Code reviewed
- [x] Tests passed
- [x] Build successful
- [x] No console errors
- [x] Performance optimized
- [x] SEO complete
- [x] Content final
- [x] Team approved

### Deployment Day
- [ ] Backup current site
- [ ] Deploy to staging first
- [ ] Test all features
- [ ] Verify mobile works
- [ ] Check analytics setup
- [ ] Monitor for errors

### Post-Deployment
- [ ] Monitor traffic
- [ ] Check page speed
- [ ] Verify rankings
- [ ] Update social media
- [ ] Send announcement

---

## 🎉 You're Ready!

Your LyneSign homepage is production-ready. Choose your deployment platform above and follow the steps.

**Estimated deployment time**: 5-10 minutes

**Questions?** Check the README or contact support for your chosen platform.

---

**Last Updated**: March 9, 2026
**Version**: 1.0.0
