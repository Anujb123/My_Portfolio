# Anuj Bansal — Portfolio

A single-page developer portfolio for **Anuj Bansal** (Electronics & Communication Engineer). It highlights VLSI, embedded systems, and digital design work with a dark, responsive layout, smooth motion, and a contact flow that supports EmailJS or a mail client fallback.

## Features

- **Sections:** Hero, About, Skills (grouped categories with levels), Projects (tag filters), Timeline, Contact, Footer  
- **UX:** Sticky navigation, smooth in-page scrolling, Framer Motion transitions  
- **Contact:** Optional [EmailJS](https://www.emailjs.com/) integration; if env vars are unset, submit opens the default mail client  
- **Content:** Centralized in one data file for easy edits (no CMS required)

## Tech stack

| Layer        | Choice |
| ------------ | ------ |
| UI           | React 19 |
| Build        | Vite 8 |
| Styling      | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Animation    | Framer Motion |
| Icons        | React Icons |
| Email (opt.) | `@emailjs/browser` |

## Prerequisites

- [Node.js](https://nodejs.org/) **18+** (includes npm)

## Quick start

```bash
git clone <your-repo-url>
cd PORTFOLIO
npm install
npm run dev
```

The dev server starts with hot module replacement. Open the URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Development server with HMR |
| `npm run build` | Production build output to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Optional assets

| Asset | Path | Notes |
| ----- | ---- | ----- |
| Resume PDF | `public/resume.pdf` | Powers the Hero “Resume” download |
| Profile / hero images | `public/` paths referenced in `content.js` | e.g. `hero-cutout.png`, `about-profile.png`; missing images fall back to initials where applicable |

## EmailJS (optional)

1. Create an account at [EmailJS](https://www.emailjs.com/) and configure an **email service** and **template**.  
2. Under **Account → API Keys**, copy the **public key** (browser apps must not use the private key).  
3. Copy `.env.example` to `.env` in the project root (next to `package.json`) and set:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Restart `npm run dev` after changing `.env` (Vite reads env at startup).  
5. Under **Account → Security**, add **`localhost`** to **Allowed domains** while developing.  
6. Align template variables with the form (e.g. `{{name}}`, `{{email}}`, `{{message}}`). On failure, the UI surfaces the API error when available.

If any of these variables are missing, the contact form falls back to opening the system mail client.

## Customizing content

Edit **`src/data/content.js`** for:

- Profile (name, role, tagline, links, image paths)  
- About copy  
- Skill categories and levels  
- Project list, tags, and filter labels  
- Timeline entries and social URLs  

## Project structure (overview)

```
PORTFOLIO/
├── public/          # Static assets (resume, images, favicon)
├── src/
│   ├── components/  # Page sections (Hero, About, …)
│   ├── data/        # content.js — single source of copy & project data
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.*
└── package.json
```

## License

This project is private / personal unless you add a license file. Add a `LICENSE` at the repo root if you intend to open-source the site.

---

Built with React, Vite, and Tailwind CSS.
