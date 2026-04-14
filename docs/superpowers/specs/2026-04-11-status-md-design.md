# Design Spec: Project Status and AI Guidelines

## 1. Goal
Establish a "Source of Truth" for the project's current state (`STATUS.md`) and enforce its use through AI-specific instructions (`GEMINI.md`). This will reduce redundant file exploration in future sessions and ensure data consistency (especially between the Resume PDF and the website).

## 2. Deliverables

### A. `STATUS.md` (Root Directory)
A living document that maps UI components to their data sources and tracks the current project state.

#### Sections:
1.  **Project Overview:** Tech stack (Astro, TypeScript, Vanilla CSS) and deployment (GitHub Pages via GH Actions).
2.  **Data Architecture (The "Resume" Sync):** 
    -   **Experience:** `src/content/experience/*.md`
    -   **Projects:** `src/content/projects/*.md`
    -   **Skills/Education:** Hardcoded in `src/components/Skills.astro` and `src/components/Education.astro`.
    -   **PDF Resume:** `public/Hemal-SeniorProgrammer-Resume.pdf`.
3.  **UI Component Map:**
    -   **Layout:** `src/layouts/Layout.astro` (Global styles, colors, "glow" effects).
    -   **Home Page:** `src/pages/index.astro`.
    -   **Key Components:** `Hero.astro`, `Experience.astro`, `ProjectsGrid.astro`, `Skills.astro`, etc.
4.  **Roadmap & State:**
    -   **Current State:** Astro migration complete; single-page portfolio active.
    -   **Pending:** "Brighter UI" changes (Target: `src/layouts/Layout.astro` CSS variables).
    -   **Maintenance:** Keep content files and Resume PDF in sync.

### B. `GEMINI.md` (Root Directory)
A configuration file for AI agents (Gemini CLI) to set foundational behavior.

#### Content:
-   **Mandatory Step:** Agents MUST read `STATUS.md` before any analysis or implementation.
-   **Update Rule:** Agents MUST update `STATUS.md` after any change that affects project structure, data, or roadmap.
-   **Style Guide:** Adhere to Vanilla CSS and Astro conventions as mapped in `STATUS.md`.

## 3. Implementation Strategy
1.  Create `STATUS.md` with accurate mappings based on current file exploration.
2.  Create `GEMINI.md` with the critical mandates.
3.  Perform a final "State Sync" check (ensure `STATUS.md` perfectly matches the current file tree).

## 4. Testing & Validation
-   Verify all file paths in `STATUS.md` are correct.
-   Confirm `GEMINI.md` is visible to the agent at the start of a session.
