# Shruti Subramanian — Portfolio

An interactive "physical desk" portfolio for **Shruti Subramanian** — AI & Data Science engineer and freelance full-stack developer.

Built with plain **HTML + CSS + JavaScript**. No frameworks, no build step.

## Live

Deployed on **GitHub Pages** → https://shrutisubramanian.github.io/portfolio/
_(update this URL after your first deploy if the repo name differs)_

## Sections

- **Hero** — interactive desk landing
- **About** — bio, education, focus areas
- **Projects** — 5 pinned projects (awards, IEEE paper, live demos)
- **Experience** — internships & client work
- **Skills** — "My Toolkit" notebook
- **Contact** — email, LinkedIn, GitHub, resume

## Assets

- `assets/Shruti_Subramanian_Resume.pdf` — resume (linked from Contact + footer)
- `assets/AIOps_Research_Paper.pdf` — published IEEE conference paper
- `assets/ICACT_Certificate.pdf` — conference certificate
- `assets/coding-vibes.jpg` — About-section artwork

## Run locally

Any static server works:

```bash
python -m http.server 8642
# then open http://127.0.0.1:8642
```

(Opening `index.html` directly via double-click also works; only the PDF links need a server.)

## Deploy (GitHub Pages)

1. Create a **public** repo named `portfolio` on GitHub.
2. Push this folder:

```bash
git remote add origin https://github.com/shrutisubramanian/portfolio.git
git push -u origin main
```

3. Repo **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. Your site goes live at `https://shrutisubramanian.github.io/portfolio/` in a minute or two.

## Updating

Edit the files, then:

```bash
git add -A
git commit -m "update portfolio"
git push
```

GitHub Pages redeploys automatically.

---

© Shruti Subramanian — hand-built systems.
