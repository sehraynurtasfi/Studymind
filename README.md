# StudyMind AI

A premium AI study toolkit with Note Summarizer, Quiz Generator, and Flashcard Generator — built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Note Summarizer** — 3-4 sentence summary + 5 key takeaways
- **Quiz Generator** — 5 multiple choice questions with instant feedback
- **Flashcard Generator** — 8 interactive flip cards with progress tracking
- **Fully responsive** — works on all screen sizes including mobile
- **Dark academic design** — grain texture, ambient glow, smooth animations
- **Secure API** — Anthropic API key stays server-side only
- **TypeScript** throughout
- **App Router** architecture

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Add your API key

```bash
cp .env.local.example .env.local
```

Open `.env.local` and replace `your_api_key_here` with your key from [console.anthropic.com](https://console.anthropic.com).

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add `ANTHROPIC_API_KEY` in Vercel → Project Settings → Environment Variables
4. Deploy 🚀

## Project Structure

```
studymind/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── summarizer/page.tsx
│   ├── quiz/page.tsx
│   ├── flashcards/page.tsx
│   └── api/
│       ├── summarize/route.ts
│       ├── quiz/route.ts
│       └── flashcards/route.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── GrainSpotlight.tsx
├── public/
│   └── favicon.svg
└── .env.local.example
```

## Built by Yeasin Santo
