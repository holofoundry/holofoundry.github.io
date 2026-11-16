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

Push to `main`. GitHub Actions builds and deploys via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**Pages source** must be **GitHub Actions** (not “Deploy from a branch”). Branch/Jekyll publishing fails on this Astro repo and shows up as **pages build and deployment**.

Site URL: https://holofoundry.github.io/

Optional later: attach custom domain `holofoundry.io` in the same Pages settings and point DNS.
