# O Poder da Terceira Linha - Workshop Landing Page

This is a high-performance, conversion-optimized landing page for "O Poder da Terceira Linha" cryptocurrency workshop by Léo Hermoso. Built with Next.js, TypeScript, and TailwindCSS.

## Tech Stack

- **Next.js 14** - React framework with server-side rendering and static site generation
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **React** - UI library

## Performance Features

- Server-side rendering for optimal loading speed
- Image optimization via Next/Image
- Lazy loading components
- Font optimization with `next/font`
- SEO optimizations including structured data
- Exit intent detection for improved conversions
- Smooth scrolling to sections

## Setup Requirements

You need Node.js 18.17.0 or later to run this project.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
# or
yarn build
```

## Deployment

This application is optimized for deployment on Vercel, but can be deployed on any platform that supports Next.js.

## Image Assets

Before deploying, make sure to add the following images to the `/public/images/` directory:

- `leo-hermoso.jpg` - Profile photo of Léo Hermoso
- `crypto-illustration.png` - Main hero image
- `og-image.jpg` - Open Graph image (1200x630px)
- `workshop-part1.jpg` - Image for workshop part 1
- `workshop-part2.jpg` - Image for workshop part 2
- `workshop-banner.jpg` - Banner image for pricing section
- `crypto-pattern.svg` - Background pattern (already included)
- `guarantee-seal.svg` - Guarantee seal image (already included)
- `favicon.ico` - Website favicon

## Analytics Setup

Update the Google Analytics and Facebook Pixel IDs in `src/app/layout.tsx` before going live:

```typescript
// Replace with your actual IDs
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
const FB_PIXEL_ID = 'XXXXXXXXXX';
```

## License

This project is licensed under the MIT License.
