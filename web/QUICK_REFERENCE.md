# ISA Website - Quick Reference Guide

## 🎨 Component Overview

### Navigation (`/components/navigation.tsx`)

```tsx
Features:
- Scroll-aware sticky header
- Gradient logo with hover effects
- Active page indicators with animations
- Enhanced mobile menu with ISA branding
- Gradient "Join ISA" button with shimmer
```

### Home Components (`/components/home/`)

#### 1. Hero Section

```tsx
Key Features:
- Multi-layer background with parallax
- 20 animated particles
- 5 floating gradient orbs
- Animated gradient text
- Interactive stats pills
- Shimmer CTA buttons
- Enhanced scroll indicator
```

#### 2. About Section

```tsx
Key Features:
- Decorative grid background
- Value proposition pills
- 4 feature cards with hover effects
- Icon rotation animations
- Gradient accents
```

#### 3. Stats Section

```tsx
Key Features:
- Animated particle background
- Icon-based stats display
- Glassmorphic cards
- Hover reveal descriptions
- Glow effects on numbers
```

#### 4. Testimonials Section

```tsx
Key Features:
- Star ratings display
- Member verification badges
- Enhanced card layouts
- Quote icon layers
- Overall rating summary
```

#### 5. Upcoming Events Section

```tsx
Key Features:
- Hero images with hover scale
- Quick action overlays
- Enhanced event detail cards
- Icon-based information
- "What's Happening" badge
```

#### 6. Join Section

```tsx
Key Features:
- 6 benefit cards with icons
- Particle background
- Enhanced CTAs (white + glass)
- Trust indicators
- Free/cancel anytime messaging
```

---

## 🎨 Design Tokens

### Colors

```css
Primary: #059669 (Emerald-600)
Secondary: #10b981 (Emerald-500)
Accent: #10b981 (Emerald-500)
Background: #ffffff (Light) / #0f172a (Dark)
```

### Typography

```css
Headings: 4xl - 9xl (font-black, tracking-tight)
Body: base - 2xl (font-light/normal)
Labels: xs - sm (font-semibold/bold)
Font: Inter
```

### Spacing Scale

```css
Sections: py-24 to py-32
Cards: p-6 to p-10
Gaps: gap-4 to gap-8
```

### Animation Timing

```css
Fast: 300ms
Standard: 500ms
Slow: 700ms
Very Slow: 1000ms
```

---

## 🎭 Animation Classes

### Custom Utilities

```css
.animate-float
  -
  Floating
  animation
  (6s)
  .animate-glow
  -
  Glow
  pulse
  (2s)
  .animate-gradient
  -
  Gradient
  movement
  (4s)
  .glass-effect
  -
  Glassmorphism
  .card-hover
  -
  Lift
  on
  hover;
```

### Hover Effects

```css
hover:scale-105 - Slight scale up
hover:-translate-y-2 - Lift up
hover:rotate-12 - Slight rotation
hover:shadow-2xl - Enhanced shadow
```

---

## 📱 Responsive Breakpoints

```css
sm: 640px   - Small tablets
md: 768px   - Tablets
lg: 1024px  - Small desktops
xl: 1280px  - Desktops
2xl: 1536px - Large desktops
```

### Grid Layouts

```css
Mobile: 1 column
Tablet (md): 2 columns
Desktop (lg): 3-4 columns
```

---

## 🎯 Interactive Elements

### Buttons

```tsx
<Button variant="default" size="lg">
  Standard Button
</Button>

<Button variant="gradient" size="xl">
  Gradient Button (Primary CTA)
</Button>

<Button variant="glass" size="lg">
  Glass Button (Secondary CTA)
</Button>

<Button variant="outline" size="default">
  Outline Button
</Button>
```

### Cards

```tsx
<Card className="group hover:-translate-y-2 transition-all duration-500">
  {/* Hover effects automatically applied */}
</Card>
```

### Icons

```tsx
import { Calendar, Users, Globe } from "lucide-react";

<Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform" />;
```

---

## 🔄 Common Patterns

### Glassmorphic Badge

```tsx
<div className="glass-effect px-6 py-3 rounded-full border border-white/30">
  <Icon className="h-4 w-4" />
  <span>Text</span>
</div>
```

### Gradient Text

```tsx
<span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
  Gradient Text
</span>
```

### Floating Orbs

```tsx
<div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
```

### Animated Particles

```tsx
{
  [...Array(20)].map((_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
      }}
    />
  ));
}
```

### Icon Container with Hover

```tsx
<div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:rotate-12 transition-all">
  <Icon className="h-6 w-6 text-primary" />
</div>
```

### Shimmer Effect

```tsx
<Button className="relative overflow-hidden group">
  Button Text
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
</Button>
```

---

## 🎨 Color Combinations

### Primary Gradients

```css
from-primary via-secondary to-accent
from-primary to-primary/90
from-primary/20 to-primary/10
```

### Background Overlays

```css
bg-gradient-to-br from-primary/30 via-black/85 to-secondary/30
bg-gradient-to-t from-black/98 via-black/70 to-black/75
```

### Glow Effects

```css
shadow-xl hover:shadow-accent/40
shadow-2xl hover:shadow-primary/30
```

---

## ⚡ Performance Tips

1. **Use transform instead of position** for animations
2. **Apply will-change** for frequently animated elements
3. **Use backdrop-filter** sparingly
4. **Optimize images** with Next.js Image component
5. **Lazy load** below-the-fold content
6. **Reduce animation complexity** on mobile

---

## 🐛 Common Issues & Solutions

### Issue: Animations not smooth

**Solution**: Add `will-change: transform` or use `transform` instead of `margin`/`top`/`left`

### Issue: Hover effects don't work on mobile

**Solution**: Use `@media (hover: hover)` for hover-only effects

### Issue: Text not readable on gradient backgrounds

**Solution**: Add text shadows or overlay gradients

### Issue: Cards jump on hover

**Solution**: Use `transform` instead of `margin` for lift effects

---

## 📋 Maintenance Checklist

### Weekly

- [ ] Check for broken links
- [ ] Update event dates
- [ ] Monitor performance metrics

### Monthly

- [ ] Update member testimonials
- [ ] Refresh event images
- [ ] Review analytics data
- [ ] Test on latest browsers

### Quarterly

- [ ] Audit accessibility
- [ ] Update dependencies
- [ ] Review and optimize code
- [ ] A/B test new features

---

## 🚀 Deployment Notes

### Before Deploying:

1. ✅ Run `npm run build`
2. ✅ Check for TypeScript errors
3. ✅ Test on mobile devices
4. ✅ Verify all images load
5. ✅ Test all forms
6. ✅ Check accessibility
7. ✅ Review console for errors

### Environment Variables:

```env
NEXT_PUBLIC_SITE_URL=https://isa-ashesi.com
NEXT_PUBLIC_API_URL=your-api-url
```

---

## 📚 Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [shadcn/ui](https://ui.shadcn.com)

### Design Inspiration

- [Dribbble](https://dribbble.com)
- [Awwwards](https://awwwards.com)
- [Behance](https://behance.net)

---

**For Support**: Contact the development team
**Version**: 2.0
**Last Updated**: October 30, 2025
