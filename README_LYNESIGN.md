# LyneSign Homepage - Modern Redesign

A stunning, tech-forward homepage for LyneSign, a leading indoor digital billboard and local marketing company in Houston, TX.

## 🚀 Project Overview

This project is a complete redesign of the LyneSign homepage, featuring:

- **Modern, Tech-Forward Design** - Clean aesthetics with dynamic animations
- **High-Converting Interface** - Clear CTAs and value propositions
- **Responsive & Performant** - Optimized for all devices and fast load times
- **Interactive Animations** - Smooth Framer Motion animations and micro-interactions
- **Data-Driven Layout** - Emphasizes statistics and proven results

## 📋 Features

### Components

1. **Navbar** - Sticky navigation with dropdown menus and mobile hamburger menu
2. **Hero Section** - Animated headline with billboard mockup and floating stat cards
3. **Stats Section** - Animated counter cards showing key metrics
4. **Indoor Billboards Section** - Split layout showcasing product features
5. **Venue Partner Network** - Partnership benefits and CTAs
6. **Solutions Showcase** - Bento grid of marketing solutions
7. **Why Choose Us** - Alternating content layout with benefits
8. **CTA Section** - Final conversion zone with contact info
9. **Footer** - Comprehensive footer with links and social media

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (headings), Inter (body)
- **Language**: TypeScript

## 🎨 Design System

### Color Palette

```css
--primary-gold: #DDA974
--primary-blue: #1E3A8A
--accent-coral: #FF6B4A
--accent-purple: #8B5CF6
--text-dark: #1F2937
--text-light: #6B7280
--bg-light: #F9FAFB
--bg-white: #FFFFFF
```

### Typography

- **Headings**: Space Grotesk (700-800 weight)
- **Body & UI**: Inter (400-600 weight)
- H1: 3.5rem - 4.5rem (desktop)
- H2: 2.5rem - 3rem
- H3: 1.5rem - 2rem

## 📁 Project Structure

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── StatsSection.tsx
│   ├── IndoorBillboardsSection.tsx
│   ├── VenuePartnerSection.tsx
│   ├── SolutionsShowcase.tsx
│   ├── WhyChooseUsSection.tsx
│   └── CTASection.tsx
├── globals.css           # Global styles and design tokens
├── layout.tsx            # Root layout with metadata
└── page.tsx              # Homepage (composes all sections)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
   ```bash
   cd /Users/mazangangunza/Desktop/lynesign-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

## ✨ Key Features

### Micro-Interactions

- Navbar compacts and changes backdrop on scroll
- Stats counter animations on viewport entry
- Billboard mockup with looping ad content
- Hover effects on cards and buttons
- Staggered animation on section entries
- Parallax effects on background elements

### Responsive Design

- Mobile-first approach
- Hamburger menu for mobile navigation
- Touch-friendly buttons and spacing
- Optimized images with Next.js Image component
- Flexible grid layouts that adapt to screen size

### Performance Optimization

- CSS transforms for smooth animations
- Lazy loading for images
- Code splitting with dynamic imports
- Optimized font loading with next/font
- SEO-optimized with proper heading hierarchy

### Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Proper focus states
- Alt text on images
- Keyboard navigation support
- Color contrast compliance

## 🎯 Customization Guide

### Changing Brand Colors

Edit `app/globals.css` and update the CSS variables:

```css
--primary-gold: #DDA974;
--accent-coral: #FF6B4A;
/* ... other colors */
```

### Updating Content

All text content is found in component files. Simply search for the text you want to change and update it.

### Modifying Animations

Framer Motion animation configurations are in each component. Look for `motion.*` components and their props like `variants`, `initial`, and `animate`.

## 📊 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari 12+
- Android Chrome (latest)

## 🔧 Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## 📝 Code Quality

This project follows:

- Next.js best practices
- Tailwind CSS conventions
- TypeScript strict mode
- ESLint configuration

## 📞 Contact & Support

- **Phone**: (281) 555-0100
- **Email**: info@lynesign.com
- **Location**: Missouri City, Houston, TX

## 📄 License

Copyright © 2026 LyneSign. All rights reserved.
Designed by N-Compass TV

## 🚀 Future Enhancements

- [ ] Add dynamic content management system (CMS)
- [ ] Implement analytics tracking
- [ ] Add blog section
- [ ] Create case study pages
- [ ] Build locations directory page
- [ ] Add live chat integration
- [ ] Implement email newsletter signup
- [ ] Create contact form with backend integration
- [ ] Add video backgrounds to sections
- [ ] Implement dark mode toggle

---

**Ready to launch?** See the Getting Started section above to run the project locally.
