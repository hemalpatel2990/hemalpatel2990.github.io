# Single-Page Portfolio Redesign — Design Document

**Date:** 2026-03-02
**Goal:** Convert multi-page Jekyll portfolio into a single-page layout optimized for both recruiter scanning and project depth showcase.

## Approach: Hybrid Custom Layout

Custom `_layouts/portfolio.html` for the main page, keep Minimal Mistakes remote theme for 404/future pages.

## Page Sections (top to bottom)

1. **Sticky Nav** — Name + section anchor links + Resume PDF button. Active section highlighting via IntersectionObserver.
2. **Hero (70vh)** — Name, title, tagline, CTA buttons (View Projects, Download Resume), social icons row. No sidebar — bio info embedded here.
3. **Stats Bar** — Compact horizontal row: 10+ Yrs, 80%+ Perf Gains, 30% Workflow Efficiency, Expert Networking.
4. **Projects (card grid + accordion)** — Professional projects (WaveXR, Razor Edge, Smartcloud) and Personal projects (Elemental Arsenal, Universal Data Sync, NeoThreads). Cards show thumbnail, company, dates, 1-line summary, shipped titles count. Click expands accordion with full detail sub-sections. One expanded at a time.
5. **Shipped Titles** — Flip cards for Wave Beta, Wave Standalone, Alimentary Avengers, etc. (migrated from current homepage).
6. **Skills** — Tag/pill styling grouped by category (Languages, Engines, Systems, Tools, AI Tools).
7. **Education** — Compact 2-3 line section.
8. **Contact + Footer** — Email, LinkedIn, GitHub, YouTube, Resume download.

## Technical Architecture

### Files

| File | Action | Purpose |
|------|--------|---------|
| `_layouts/portfolio.html` | Create | Full custom HTML layout |
| `assets/css/portfolio.css` | Create | All single-page styles |
| `assets/js/portfolio.js` | Create | Smooth scroll, accordion, nav highlight |
| `index.md` | Modify | Switch to `layout: portfolio`, front matter data |
| `_data/navigation.yml` | Modify | Anchor links (#projects, #skills, #contact) |
| `_config.yml` | Keep | Remote theme stays for 404 |
| `_pages/*.md` | Keep unlinked | No longer in nav, stay in repo |

### Design System

- **Colors:** `#0f0f1e` background, `#1a1a2e` cards, `#4a9eff` accent, `#8892b0` muted text, `#ffffff` headings
- **Max width:** 1200px content area
- **Responsive:** 3-col (1200px+), 2-col (768-1199px), 1-col (<768px)
- **Typography:** System font stack, no external fonts

### JavaScript (Vanilla, no libraries)

- `scroll-behavior: smooth` on html
- Accordion: `max-height` CSS transition, one-at-a-time toggle
- Nav highlight: `IntersectionObserver` tracks visible section
- Sticky nav: CSS `position: sticky`

### Key Constraints

- No build pipeline changes — still plain Jekyll
- No external JS/CSS libraries
- GitHub Pages compatible
- Keep GA4 tracking (`G-TMB7WW66E6`)
