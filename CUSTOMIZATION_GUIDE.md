# Portfolio Website Customization Guide

## 🎨 Easy Customizations

### 1. Brand Information
Edit these files to update your brand:

**Company Info (`src/components/LandingPage.tsx`):**
```typescript
// Line 34-36: Update studio name
<h1 className="text-2xl font-normal text-white/90 mb-2 font-['Instrument_Sans']">
  dietrich.tv studio
</h1>

// Line 46-58: Update main description
<div className="text-4xl md:text-5xl lg:text-6xl leading-tight font-normal font-['Instrument_Sans']">
  <p className="mb-4">
    we are a <em className="italic">mixed-media</em> production
  </p>
  // ... update your description
</div>
```

**Contact Information (`src/components/ContactPage.tsx`):**
```typescript
// Lines 119-123: Update office address
<div className="space-y-1 text-base text-black">
  <div>Rua Luis XIV - Sala 12</div>
  <div>Vila Madalena</div>
  <div>São Paulo - Brazil</div>
</div>

// Lines 142-144: Update contact details
<div className="space-y-1 text-base text-black">
  <div>+55 11 99306 8428</div>
  <div>contact@dietrich.tv</div>
</div>
```

### 2. Colors & Styling
Update colors in `src/index.css`:

**Primary Colors:**
- Background: `bg-black` (landing) / `bg-white` (other pages)
- Text: `text-white` / `text-black`
- Accent: `bg-red-500` (decorative circles)

**Custom Colors:**
Add to your Tailwind config or use CSS custom properties:
```css
:root {
  --brand-primary: #your-color;
  --brand-secondary: #your-color;
}
```

### 3. Typography
Current font: Instrument Sans
To change: Update the Google Fonts import in `src/index.css`:
```css
@import url("https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap");
```

### 4. Portfolio Projects
Update projects in `src/components/WorkPage.tsx`:

```typescript
const mockWorks = [
  {
    id: 1,
    title: "Your Project Title",
    category: "commercial", // or "fashion", "film", "animation", "documentary"
    year: "2024",
    description: "Your project description",
    client: "Your Client",
    videos: [
      {
        id: 1,
        thumbnail: "your-image-url",
        title: "Video Title",
        description: "Video description"
      }
    ]
  }
];
```

## 🛠 Advanced Customizations

### 1. Add New Pages
1. Create component in `src/components/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

### 2. Animation Customizations
**Auto-scroll Speed:**
```typescript
// In AutoScrollCarousel.tsx, line 43
scrollPosition += speed / 60; // Adjust speed here
```

**Transition Duration:**
```typescript
// In App.tsx, line 43
setTimeout(() => {
  // ... 
}, 300); // Change transition time
```

### 3. Add Analytics
Add Google Analytics or other tracking:

```typescript
// In src/main.tsx
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>
);
```

### 4. SEO Optimization
Update `index.html`:
```html
<head>
  <meta name="description" content="Your description">
  <meta property="og:title" content="Your Title">
  <meta property="og:description" content="Your Description">
  <meta property="og:image" content="your-image-url">
  <meta name="twitter:card" content="summary_large_image">
</head>
```

## 🎭 Visual Enhancements

### 1. Add Video Background
Replace video placeholder in `LandingPage.tsx`:
```typescript
<video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover opacity-30">
  <source src="/path-to-your-video.mp4" type="video/mp4" />
</video>
```

### 2. Custom Animations
Add CSS animations in `src/index.css`:
```css
@keyframes customAnimation {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.custom-animation {
  animation: customAnimation 0.6s ease-out;
}
```

### 3. Interactive Elements
Add hover effects, micro-interactions, or loading states:
```typescript
const [isHovered, setIsHovered] = useState(false);

<div 
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className={`transition-all duration-300 ${isHovered ? 'transform scale-105' : ''}`}
>
  Your content
</div>
```

## 📱 Mobile Optimization

### Responsive Breakpoints:
- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+
- `xl:` 1280px+

### Mobile-First Approach:
```typescript
<div className="text-sm md:text-base lg:text-lg">
  Mobile: small, Tablet: base, Desktop: large
</div>
```

## 🔧 Performance Tips

1. **Image Optimization:**
   - Use WebP format when possible
   - Implement lazy loading
   - Compress images before uploading

2. **Code Splitting:**
   - Use React.lazy() for route-based splitting
   - Implement component-level splitting for heavy components

3. **Bundle Analysis:**
```bash
npm install --save-dev webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

## 🎯 Common Customization Tasks

1. **Change Logo/Brand Name:** Update all instances of "dietrich.tv studio"
2. **Update Color Scheme:** Search and replace color classes throughout components
3. **Add Social Links:** Update contact sections with real social media links
4. **Customize Project Categories:** Modify the categories array in WorkPage.tsx
5. **Add Contact Form:** Implement a contact form in ContactPage.tsx
6. **Add Blog/News Section:** Create new page component and routing

## 🚨 Important Notes

- Always test on multiple devices and browsers
- Maintain consistent styling throughout the site
- Keep accessibility in mind (alt tags, keyboard navigation)
- Test all animations and interactions
- Backup your original files before major changes

## 📞 Need Help?

For customization assistance, contact: contact@dietrich.tv
