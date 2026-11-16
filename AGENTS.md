# Holo Foundry website (GitHub Pages)

Static marketing site for **Holo Foundry**, deployed from this repository to GitHub Pages. It supersedes the Payload/Next app in `company-website`.

## Ownership

- **Purpose:** Company marketing site — home, about/services, projects, blog, contact.
- **Stack:** Astro (static) + Tailwind CSS 4 + Markdown content collections.
- **Hosting:** GitHub Pages via `.github/workflows/deploy.yml` on `main`.
- **No CMS:** Edit Markdown/Astro files and push.

## Structure

```text
src/
  components/     Nav, Footer, Hero, Chapter, MicroLabel, …
  content/
    blog/         Blog posts (Markdown)
    projects/     Case studies (Markdown)
  content.config.ts
  data/site.ts    Nav, legal, contact, Formspree id key
  layouts/        BaseLayout
  pages/          Routes
  styles/global.css
public/           Logos, holocube, favicons
```

## Content workflow

1. **Blog:** add `src/content/blog/<slug>.md` with frontmatter (`title`, `description`, `pubDate`, `author`).
2. **Projects:** add `src/content/projects/<slug>.md` with frontmatter (`title`, `description`, `client`, `stack`, `pubDate`, `featured`).
3. Commit and push to `main` — Actions builds and deploys.

## Design tokens

Dark-only. Brand accent `#F24B6A`, surface `#252322`, near-black background. Kora-influenced chapter layout (full-bleed acts, giant type, micro labels, sparse motion). Font: Google Sans.

## Contact form

Set `PUBLIC_FORMSPREE_ID` (Formspree form id) in the GitHub Actions environment / local `.env` so the contact form posts correctly. Without it, the form shows a mailto fallback notice.

## Local

```bash
npm install
npm run dev
npm run build
```

## Pages publishing

Real deploys use `.github/workflows/deploy.yml` (Astro → `actions/deploy-pages`).

The workflow also calls the Pages API to keep **Source = GitHub Actions**, which stops the legacy **pages-build-deployment** (Jekyll) check from failing on `.astro` sources. If that API call lacks permission, set Source manually under Settings → Pages.

`public/.nojekyll` is copied into `dist` so GitHub does not apply Jekyll to the published artifact. Root `_config.yml` excludes app sources as a belt-and-braces for any residual Jekyll pass.

## Child DOX index

Not yet indexed beyond this root — site is a single package.
