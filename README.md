# Waqas Munir — Portfolio

Personal portfolio of **Waqas Munir** (also written *Waqas Muneer*), Full Stack Developer (ASP.NET MVC · C# · SQL Server · PHP · JavaScript) based in Karachi, Pakistan.

**Live site:** https://juttt270.github.io/Waqas-portfolio/

## What's inside

| Path | What it is |
| --- | --- |
| `index.html` | Home page: cinematic hero, intro, career, services, selected work, 3D project gallery, contact, footer |
| `assets/css/style.css` | All styles (black editorial theme, metallic headings, lime accent) |
| `assets/js/main.js` | Hero intro, scroll animations, services accordion, 3D gallery, contact form |
| `assets/vendor/` | GSAP 3.12.5 + ScrollTrigger (self-hosted) |
| `assets/fonts/` | Inter and Instrument Serif (self-hosted woff2) |
| `images/` | Portrait cutout, project screenshots (WebP), horizon background, share image |
| `Waqas_Munir_CV.pdf` | Downloadable CV |
| `Adchitects/`, `Calculator/`, `Glory/` … | Individual demo projects linked from the gallery |

## Highlights

- No build step — plain HTML, CSS and JavaScript with GSAP for animation.
- Works without JavaScript and respects `prefers-reduced-motion` (all content visible, gallery becomes a grid).
- SEO: descriptive title/description, canonical URL, Open Graph/Twitter cards, JSON-LD `Person` + `WebSite` + `ProfilePage` (with the *Waqas Muneer* spelling), `sitemap.xml`, `robots.txt`.
- Contact form relays to Gmail through [FormSubmit](https://formsubmit.co). The first submission sends a one-time activation email to the receiving address — click the link in it once.

## Run locally

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Editing content

- **Selected work / services / skills ticker / gallery:** edit the matching block in `index.html`.
- **Gallery:** copy one `<li class="g-card">…</li>` block and add its screenshot to `images/`; the counter and 3D layout adapt automatically.
- **Accent colour:** change `--lime` at the top of `assets/css/style.css`.
- **Receiving email:** update `FORM_ENDPOINT` in `assets/js/main.js` and the `<form action>` in `index.html`.
