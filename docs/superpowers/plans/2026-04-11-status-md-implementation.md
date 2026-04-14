# Project Status and AI Guidelines Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `STATUS.md` and `GEMINI.md` to establish a persistent source of truth for the project's architecture and AI behavior.

**Architecture:** Root-level documentation that maps UI components to data sources and defines AI operational mandates.

**Tech Stack:** Markdown, Gemini CLI Configuration.

---

### Task 1: Create STATUS.md

**Files:**
- Create: `STATUS.md`

- [ ] **Step 1: Create the STATUS.md file with the mapped project structure**

```markdown
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
- [ ] **UI Polish:** Brighten UI elements (Target: `src/layouts/Layout.astro` CSS variables).
- [ ] **Consistency:** Ensure website content matches the latest Resume PDF.

## Maintenance Notes
- When adding a new experience or project, create a new `.md` file in `src/content/`.
- Ensure `order` in frontmatter is updated to reflect chronological sequence.
```

- [ ] **Step 2: Commit STATUS.md**

Run: `git add STATUS.md && git commit -m "docs: add STATUS.md for project state tracking"`

---

### Task 2: Create GEMINI.md

**Files:**
- Create: `GEMINI.md`

- [ ] **Step 1: Create the GEMINI.md file with AI mandates**

```markdown
# Gemini CLI Guidelines

## Critical Mandates
- **Context First:** Before performing any analysis or making changes, you MUST read `STATUS.md` to understand the current architecture and project state.
- **State Persistence:** After completing any work that changes the project structure, data mapping, or roadmap, you MUST update `STATUS.md` to reflect the new state.
- **Style Consistency:** Adhere to Vanilla CSS and Astro conventions as mapped in `STATUS.md`. Avoid adding external CSS frameworks unless explicitly requested.

## Operational Preferences
- **Data Integrity:** When updating content, cross-reference with `public/Hemal-SeniorProgrammer-Resume.pdf` to ensure the website and PDF remain in sync.
- **UI Changes:** Global UI changes (colors, spacing) should primarily be handled in `src/layouts/Layout.astro`.
```

- [ ] **Step 2: Commit GEMINI.md**

Run: `git add GEMINI.md && git commit -m "docs: add GEMINI.md for AI operational guidelines"`

---

### Task 3: Verification

- [ ] **Step 1: Verify file existence and content**

Run: `ls STATUS.md, GEMINI.md`

- [ ] **Step 2: Self-Correction (Optional)**
Check if any paths in `STATUS.md` need adjustment based on the very latest file tree.
