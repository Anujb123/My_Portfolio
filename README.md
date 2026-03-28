# Anuj Bansal — Portfolio

Modern, responsive personal portfolio built with **React (Vite)**, **Tailwind CSS v4**, and **Framer Motion**. Dark theme only, with smooth scrolling, a sticky navbar, project filters, and a contact form (EmailJS or mailto fallback).

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (includes npm)

## Setup

```bash
cd PORTFOLIO
npm install
```

### Assets (optional)

- **Resume:** Copy your PDF to `public/resume.pdf` so the hero “Resume” download works.
- **Profile photo:** Add `public/profile.jpg`. If the file is missing, the About section shows initials on a gradient.

### EmailJS (optional)

1. Create an account at [EmailJS](https://www.emailjs.com/) and add an **email service** (e.g. Gmail) plus an **email template**.
2. In **Account → API Keys**, copy the **public key** (browser apps must not use the private key).
3. Copy `.env.example` to `.env` in the project root (next to `package.json`) and set:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Restart** `npm run dev` after editing `.env` (Vite reads env only at startup).
5. Under **Account → Security**, add **`localhost`** to **Allowed domains** while developing.
6. In the template editor, use variables that match the app (e.g. `{{name}}`, `{{email}}`, `{{message}}`) — the form sends several aliases (`name`, `user_email`, `message`, etc.). If sending fails, the UI shows the API error text.

If env vars are missing, submit opens your mail client instead.

## Scripts

| Command       | Description                    |
| ------------- | ------------------------------ |
| `npm run dev` | Start dev server (with HMR)    |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint                     |

## Customize content

Edit **`src/data/content.js`** — profile, about text, skills, projects, timeline, and social URLs (GitHub, LinkedIn, X/Twitter).

## Tech stack

- React 19, Vite 8
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Framer Motion
- React Icons
- EmailJS browser SDK
