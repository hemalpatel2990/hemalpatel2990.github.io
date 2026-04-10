# Portfolio Redesign — Astro Modern Framework

**Date:** 2026-04-08
**Goal:** Rebuild the portfolio using Astro to create a lightning-fast, minimalist, and scannable "Senior Engineer" profile that passes the 6-second recruiter test.

## Design Strategy: The 6-Second Rule

The redesign focuses on high-contrast, bold typography and a clear F-pattern layout to ensure core technologies (Unreal, Unity, C++, C#) are visible within seconds.

- **Tone:** Option B (Noir Engine) — Deep neutral darks (`#0a0a0a`), pure white text, and subtle gray accents.
- **Visual Style:** Option B (Executive Impact) — Narrative-led hero section with a bold achievement statement and a clear "Core Expertise" row.
- **Typography:** System font stack (Inter/San Francisco) for maximum performance and a "native" OS feel.

## Architecture & Data Flow

- **Framework:** Astro 4.x
- **Content Strategy:** Astro Content Collections (`src/content/`)
    - `experience/`: Markdown for roles (WaveXR, etc.)
    - `projects/`: Markdown for technical projects (GAS Plugin, etc.)
    - `data/site.yaml`: Global metadata (Title, Social Links)
- **Styling:** Vanilla CSS with CSS Variables for the Noir theme.
- **Interactivity:** Minimal Vanilla JS for smooth scrolling and asset loading. Zero-JS by default for performance.

## Page Structure

1. **Hero (Noir Engine):**
    - Bold Name + Title.
    - **Impact Statement:** "10+ years architecting core systems and multiplayer networking with 80%+ performance gains."
    - **Expertise Row:** "Core Expertise: Unreal Engine 5 | Unity | C++ | C#".
2. **Key Metrics Bar:** 10+ Yrs Exp | 4 Shipped Titles | 80% Performance Gains.
3. **Professional Experience:** Vertical timeline focusing on high-impact bullets from the updated resume.
4. **Technical Projects:** 2-column grid for GAS Plugin, Universal Data Sync, and NeoThreads.
5. **Categorized Skills:** Quick-scan pill tags.
6. **Education & Footer:** Compact links and resume download.

## Deployment

- **Hosting:** GitHub Pages.
- **Pipeline:** GitHub Actions for automated build and deploy.

## Success Criteria

- Lighthouse Performance score > 95.
- Core tech stack visible above the fold on mobile and desktop.
- PDF Resume easily accessible from any scroll position.
