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

**One-time setup** (required before the first public publish):

1. Open [repo Settings → Pages](https://github.com/holofoundry/holofoundry.github.io/settings/pages)
2. Set **Source** to **GitHub Actions**
3. Re-run the latest **Deploy to GitHub Pages** workflow (Actions tab → workflow → Re-run), or push an empty commit

Site URL: https://holofoundry.github.io/

Optional later: attach custom domain `holofoundry.io` in the same Pages settings and point DNS.
