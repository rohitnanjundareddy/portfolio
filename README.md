# Ro's Portfolio Website

A modern, dark-themed portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Designed for ML researchers and engineers.

![Portfolio Preview](preview.png)

## ✨ Features

- **Dark Theme** - Sleek, modern dark design with gradient accents
- **Responsive** - Fully responsive across all devices
- **Animated** - Smooth animations and micro-interactions
- **Sections**:
  - Hero with profile and CTAs
  - Projects with category filters
  - About with highlights grid
  - Skills organized by category
  - Journey timeline
  - Contact form

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or download the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## 📦 Deploy to Vercel

The easiest way to deploy:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js and deploys

Or use the CLI:

```bash
npm i -g vercel
vercel
```

## 🎨 Customization

### Personal Information

Update these files with your info:

1. **`app/layout.tsx`** - Update metadata (title, description)
2. **`components/Hero.tsx`** - Your name, title, bio, social links
3. **`components/About.tsx`** - About text, highlights, interests
4. **`components/Projects.tsx`** - Your projects array
5. **`components/Skills.tsx`** - Your skills categories
6. **`components/Journey.tsx`** - Your timeline items
7. **`components/Contact.tsx`** - Contact info and email
8. **`components/Footer.tsx`** - Social links

### Profile Image

Replace the placeholder in `Hero.tsx` and `About.tsx`:

```tsx
// Uncomment and update:
<Image
  src="/profile.jpg"  // Add your image to /public/profile.jpg
  alt="Your Name"
  fill
  className="object-cover"
  priority
/>
```

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```ts
colors: {
  background: '#0a0a0f',      // Main background
  surface: '#12121a',          // Card backgrounds
  'surface-light': '#1a1a25',  // Hover states
  border: '#2a2a3a',           // Borders
  primary: '#6366f1',          // Primary accent (indigo)
  'primary-light': '#818cf8',  // Primary hover
  accent: '#22d3ee',           // Secondary accent (cyan)
  // ...text colors
}
```

### Fonts

The site uses:
- **Space Grotesk** - Headings
- **Inter** - Body text
- **JetBrains Mono** - Code/monospace

Change in `app/layout.tsx` by importing different Google Fonts.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Home page
├── components/
│   ├── Navbar.tsx       # Navigation
│   ├── Hero.tsx         # Hero section
│   ├── Projects.tsx     # Projects grid
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills grid
│   ├── Journey.tsx      # Timeline
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── public/
│   ├── profile.jpg      # Your photo
│   ├── resume.pdf       # Your resume
│   └── projects/        # Project images
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🔧 Adding Features

### Contact Form Integration

The form currently simulates submission. To make it work:

**Option 1: Formspree**
```tsx
// In Contact.tsx handleSubmit:
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formState),
})
```

**Option 2: API Route**
Create `app/api/contact/route.ts` with your email service (SendGrid, Resend, etc.)

### Adding New Projects

Edit the `projects` array in `components/Projects.tsx`:

```tsx
{
  title: 'Project Name',
  description: 'Description here...',
  image: '/projects/project.jpg',
  tags: ['Tag1', 'Tag2'],
  category: ['ml', 'cv'],  // For filtering
  github: 'https://github.com/...',
  demo: 'https://demo.com',
  icon: <Brain className="w-5 h-5" />,
}
```

## 📄 License

MIT License - feel free to use for your own portfolio!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
