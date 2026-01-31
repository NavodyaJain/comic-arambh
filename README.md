
# Project File Context Overview

Below is a summary of the context and purpose of each file in this project:

## Root Files

- **package.json**: Project manifest, scripts, and dependencies for Next.js, React, Tailwind, and ESLint.
- **package-lock.json**: Auto-generated lockfile for npm dependencies.
- **postcss.config.mjs**: PostCSS config, uses Tailwind plugin.
- **next.config.mjs**: Next.js configuration file (default export, can be extended).
- **eslint.config.mjs**: ESLint config using Next.js core web vitals and custom ignores.
- **jsconfig.json**: JS config for path aliases (e.g., @/* → ./src/*).
- **.gitignore**: Standard ignores for node_modules, build, .env, etc.

## Public Assets

- **public/comic-2.png, comic-3.png, comic-4.png, comic-5.png, comic-6.png**: Image assets for gallery and components (binary, not shown).
- **public/vercel.svg**: Vercel logo SVG.

## App Directory

- **src/app/page.js**: Main page, imports all sections/components and sets up scroll animations.
- **src/app/layout.js**: Root layout, imports global CSS and Google fonts, sets up HTML structure and metadata.
- **src/app/globals.css**: Global styles, Tailwind import, custom CSS variables, and keyframes for animations.

## Components

- **src/components/Navbar.js**: Responsive navbar with scroll and section highlight logic.
- **src/components/Footer.js**: Footer with links, copyright, and social.
- **src/components/ParallaxBackground.js**: Animated parallax background with random lines and scroll effect.
- **src/components/Hero.js**: Hero section with animated title and call-to-action.
- **src/components/Booking.js**: Booking form with state, validation, and simulated submission.
- **src/components/Gallery.js**: Gallery section with images, categories, and intersection observer for animation.
- **src/components/Performances.js**: List of performance cards with details and images.
- **src/components/PunchlineBanners.js**: Animated punchline and shayari banners with effects.
- **src/components/About.js**: About section with image and origin story text.

---

## Original README

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
