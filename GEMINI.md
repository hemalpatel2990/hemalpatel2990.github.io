# Gemini CLI Guidelines

## Critical Mandates
- **Context First:** Before performing any analysis or making changes, you MUST read `STATUS.md` to understand the current architecture and project state.
- **State Persistence:** After completing any work that changes the project structure, data mapping, or roadmap, you MUST update `STATUS.md` to reflect the new state.
- **Style Consistency:** Adhere to Vanilla CSS and Astro conventions as mapped in `STATUS.md`. Avoid adding external CSS frameworks unless explicitly requested.

## Operational Preferences
- **Data Integrity:** When updating content, cross-reference with `public/Hemal-SeniorProgrammer-Resume.pdf` to ensure the website and PDF remain in sync.
- **UI Changes:** Global UI changes (colors, spacing) should primarily be handled in `src/layouts/Layout.astro`.
