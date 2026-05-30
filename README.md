# Alaa Elnily — Portfolio

Personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Syne + DM Sans (Google Fonts)
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── FadeInObserver.tsx
├── data/
│   └── index.ts        ← all portfolio content lives here
├── types/
│   └── index.ts
├── globals.css
├── layout.tsx
└── page.tsx
```

## Updating Content

All portfolio content (projects, experience, skills) lives in `app/data/index.ts`.
Edit that file to update anything — no need to touch the components.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → import your repo
3. Click Deploy — done ✅
