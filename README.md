# Shubham Mishra Portfolio

A modern Next.js portfolio built for a clean, professional online presence and ready for GitHub-hosted deployment.

## Features

- Responsive portfolio landing page
- Premium dark theme with gradient accents
- About, project, skills, experience, and contact sections
- GitHub-friendly static export configuration
- Framer Motion animation polish

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
```

The static output will be generated in the `out/` directory.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In your GitHub repo settings, enable GitHub Pages.
3. Choose the static site source from the generated `out/` folder or deploy using a static hosting pipeline.
4. If needed, set the repo name as the base path in the deployment settings.

## Customize content

Update the text in:

- `components/Hero.tsx`
- `pages/index.tsx`
- `components/Header.tsx`

You can also replace the sample email and social links with your real portfolio details.
