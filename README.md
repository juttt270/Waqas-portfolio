# Waqas Munir — Portfolio

Personal portfolio of **Waqas Munir**, Full-Stack .NET Developer (ASP.NET MVC · C# · SQL Server · PHP · JavaScript) based in Karachi, Pakistan.

**Live site:** https://juttt270.github.io/Waqas-portfolio/

## What's inside

| Path | What it is |
| --- | --- |
| `index.html` | The portfolio home page (hero, full-stack apps, about, skills, experience, 3D project gallery, contact) |
| `assets/css/style.css` | All styles, built on design tokens (dark + light theme) |
| `assets/js/main.js` | Theme toggle, mobile menu, scroll reveal, 3D gallery, contact form |
| `assets/fonts/` | Self-hosted Inter, Space Grotesk and JetBrains Mono (latin subset, woff2) |
| `images/` | Project screenshots (WebP), profile photo, share image |
| `Waqas_Munir_CV.pdf` | Downloadable CV |
| `Adchitects/`, `Calculator/`, `Glory/` … | Individual demo projects, each opens from the gallery |

## Highlights

- No frameworks and no build step — plain HTML, CSS and ~300 lines of vanilla JavaScript.
- Performance-minded: self-hosted fonts, WebP images, lazy loading, no WebGL/canvas background.
- Accessible: semantic landmarks, skip link, keyboard-operable carousel, visible focus, `prefers-reduced-motion` and no-JS fallbacks.
- SEO: meta description, canonical URL, Open Graph / Twitter cards, JSON-LD `Person`, `sitemap.xml`, `robots.txt`.
- Contact form relays to Gmail through [FormSubmit](https://formsubmit.co) — no backend needed. The very first submission triggers a one-time activation email to the receiving address; click the link in it once.

## Run locally

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Editing content

- **Add a project to the gallery:** copy one `<li class="g-card">…</li>` block in `index.html`, add its screenshot to `images/`. The counter and 3D layout adapt automatically.
- **Change colours:** edit the tokens at the top of `assets/css/style.css` (`--accent`, `--bg`, …).
- **Change the receiving email:** update the address in `assets/js/main.js` (`FORM_ENDPOINT`) and in the `<form action>` in `index.html`.
