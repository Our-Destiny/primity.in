# Primity R&D Labs — Website (Deployment)

This repository hosts the **live, built production output** for the official [Primity R&D Labs](https://primity.in) website — a research and development lab and the commercial vanguard of **Our Destiny**.

🔗 **Live site:** [https://primity.in](https://primity.in)

> ⚠️ **This is a deployment repository, not the source code.** It contains the static, compiled build (HTML/CSS/JS output) that GitHub Pages serves directly. For the actual application source, components, and development workflow, see the source repository: [`Our-Destiny/primity.in-source`](https://github.com/Our-Destiny/primity.in-source).

---

## 🏢 About Primity R&D Labs

Primity R&D Labs is a research and development lab — the commercial vanguard of **Our Destiny** — building custom business and engineering systems while advancing applied research. Based in **Kerala, India**, Primity works across:

- Enterprise & ERP systems
- High-fidelity data annotation & AI model training
- Web design & development
- Business management automation
- AI-driven automation solutions

Primity funds and supports **Our Destiny's** long-horizon research into Augmented Artificial Intelligence and human ecology systems.

---

## 🌐 How This Site is Served

This repo is configured as a **GitHub Pages** site:

- The custom domain is bound via the [`CNAME`](./CNAME) file → `primity.in`
- `index.html` at the root is the deployed entry point, referencing hashed/bundled `assets/index-*.js` and `assets/index-*.css` files
- A `404.html` is present so client-side routing (SPA) resolves correctly on deep links / hard refreshes

**You generally should not hand-edit files in this repo.** Deployments are produced by building the source project and pushing the resulting `dist/` output here (manually or via CI/CD).

---

## ✅ Things to Check / Look Into

If something looks off on the live site, here's where to look first:

| Symptom | Where to check |
|---|---|
| Site not loading / DNS issues | [`CNAME`](./CNAME) file — should contain exactly `primity.in`; also verify DNS records at your domain registrar point to GitHub Pages |
| Broken page on refresh (e.g. `/about` 404s) | Ensure `404.html` exists and mirrors `index.html` (SPA fallback) |
| Outdated content/design after a source update | Confirm the latest `dist/` build from `primity.in-source` was actually pushed here |
| GitHub Pages settings | Repo **Settings → Pages** — confirm the Pages source is set to serve from this repo (branch `main`, root `/`) and custom domain + HTTPS enforcement are enabled |
| SEO / meta tags / Open Graph issues | Check `<head>` in `index.html` for title, description, `og:*`, and Schema.org JSON-LD blocks |
| Favicons / PWA manifest | Verify `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, and `site.webmanifest` are present at the root |
| Broken JS/CSS after deploy | Make sure the hashed asset filenames referenced in `index.html` (`/assets/index-*.js` / `.css`) match the files actually present in `/assets` |

---

## 🔁 Updating This Site

To publish a new version of the site:

1. Make changes in the **source repository**: [`Our-Destiny/primity.in-source`](https://github.com/Our-Destiny/primity.in-source)
2. Build the production bundle there (`npm run build`)
3. Copy/deploy the resulting `dist/` contents into this repository (root), replacing existing files
4. Commit and push to `main` — GitHub Pages will automatically redeploy

---

## 📬 Contact

- Email: [reachout@primity.in](mailto:reachout@primity.in)
- Location: Kerala, India
- Website: [primity.in](https://primity.in)

---

## 📄 License

No license file is currently included in this repository. All rights reserved by **Primity R&D Labs** / **Our Destiny**, unless stated otherwise.
