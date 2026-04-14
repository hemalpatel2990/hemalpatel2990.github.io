# Project Status: Hemal Patel Portfolio

## Project Overview
- **Tech Stack:** Astro, TypeScript, Vanilla CSS.
- **Deployment:** GitHub Pages (via `.github/workflows/deploy.yml`).
- **Source Code:** [hemalpatel2990.github.io](https://github.com/hemalpatel2990/hemalpatel2990.github.io)

## Data Architecture (The "Resume" Sync)
This section maps where resume data lives. Update these files when the Resume PDF changes.

| Section | Data Source | Component |
| :--- | :--- | :--- |
| **Experience** | `src/content/experience/*.md` | `src/components/Experience.astro` |
| **Projects** | `src/content/projects/*.md` | `src/components/ProjectsGrid.astro` |
| **Skills** | `src/components/Skills.astro` (Hardcoded) | `src/components/Skills.astro` |
| **Education** | `src/components/Education.astro` (Hardcoded) | `src/components/Education.astro` |
| **Resume PDF** | `public/Hemal-SeniorProgrammer-Resume.pdf` | Linked in `Hero.astro` / `Footer.astro` |

## UI Component Map
- **Global Layout:** `src/layouts/Layout.astro` (Contains CSS variables, global styles, and "glow" effects).
- **Page Entry:** `src/pages/index.astro`.
- **Navigation:** `src/components/Navigation.astro`.
- **Hero/Splash:** `src/components/Hero.astro`.
- **Shipped Titles:** `src/components/ShippedTitles.astro` (Horizontal scrolling list).
- **Footer:** `src/components/Footer.astro`.

## Roadmap & State
- [x] **Migration:** Successfully migrated from Jekyll to Astro (April 2026).
- [x] **Video Modal:** Implemented global video modal with responsive 16:9 scaling and Noir-styled UI (April 14, 2026).
- [ ] **UI Polish:** Brighten UI elements (Target: `src/layouts/Layout.astro` CSS variables).
- [x] **Consistency:** Website content synchronized with April 2026 Resume PDF (Updated April 11, 2026).
- [x] **Content Sync:** Shipped Titles updated with accurate Unity/Unreal tech stacks and system details (Node-RED, Editor Tools).

## Maintenance Notes
- When adding a new experience or project, create a new `.md` file in `src/content/`.
- Ensure `order` in frontmatter is updated to reflect chronological sequence.
