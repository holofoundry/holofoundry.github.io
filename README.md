# holofoundry.github.io

Static marketing site for [Holo Foundry](https://holofoundry.github.io), built with Astro and Tailwind CSS. Deployed to GitHub Pages from `main`.

## Develop

```bash
npm install
npm run dev
```

## Content

- Blog posts: `src/content/blog/*.md`
- Projects: `src/content/projects/*.md`
- Site strings (nav, legal, email): `src/data/site.ts`

Copy is draft and intended for editorial revision. Mark unfinished sections with `<!-- DRAFT: … -->` in Markdown.

## Contact form

Set `PUBLIC_FORMSPREE_ID` (see `.env.example`). Without it, the contact page shows a mailto fallback.

## Deploy

Push to `main`. GitHub Actions builds and deploys via Pages. Enable **Settings → Pages → Source: GitHub Actions** on the repo if it is not already set.
