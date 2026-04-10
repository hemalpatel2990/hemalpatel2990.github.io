# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for a Senior Gameplay & Systems Engineer, hosted on GitHub Pages at hemalpatel2990.github.io.

## Tech Stack

- **Jekyll** static site generator with **Minimal Mistakes v4.24.0** remote theme (dark skin)
- Ruby/Bundler for dependencies
- Kramdown (GFM mode) for Markdown processing
- No JavaScript build pipeline, no test framework, no linters

## Build & Development Commands

```bash
bundle install                  # Install Ruby dependencies
bundle exec jekyll serve        # Run local dev server at http://localhost:4000
bundle exec jekyll build        # Build to _site/
```

Requires Ruby 3.0+ and Bundler. Deployment is automatic to GitHub Pages on push to `main`.

## Architecture

**Remote theme pattern:** Layouts, includes, and SCSS come from the remote `mmistakes/minimal-mistakes@4.24.0` gem — they are not vendored locally. Only overrides exist in this repo.

**Page layouts:**
- `index.md` — Homepage using `splash` layout with feature rows and overlay headers
- `_pages/*.md` — Content pages using `single` layout with `author_profile: true`
- `404.html` — Error page using `page` layout

**Custom styling (two layers):**
1. `assets/css/main.scss` — Imports Minimal Mistakes theme SCSS, sets `$max-width: 1600px`
2. `assets/css/custom.css` — Loaded via `_includes/head/custom.html`, contains stats grid, flip card animations, dark theme colors (#0f0f1e, #1a1a2e, #4a9eff accent), responsive breakpoints at 768px

**Navigation:** Defined in `_data/navigation.yml` (Home, Projects, About, Contact).

**Content patterns:**
- Minimal Mistakes feature rows for project showcases on homepage
- Kramdown anchor syntax (`{: #section-id}`) for internal navigation on the projects page
- Project images go in `assets/images/`
- Resume source is LaTeX (`assets/main.tex`), compiled PDF at `assets/Hemal-SeniorProgrammer-Resume.pdf`

## Key Files for Content Editing

| Content      | File                     |
|-------------|--------------------------|
| Homepage    | `index.md`               |
| About       | `_pages/about.md`        |
| Projects    | `_pages/projects.md`     |
| Contact     | `_pages/contact.md`      |
| Site config | `_config.yml`            |
| Navigation  | `_data/navigation.yml`   |
| Custom CSS  | `assets/css/custom.css`  |

## Notes

- No `_posts/` directory — this is a pages-only portfolio site, not a blog.
- `_config.yml` changes require restarting `jekyll serve` (they are not hot-reloaded).
- Google Analytics (GA4) is configured with tracking ID `G-TMB7WW66E6`.
