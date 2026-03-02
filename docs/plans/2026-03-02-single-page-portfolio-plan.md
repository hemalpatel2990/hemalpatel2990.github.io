# Single-Page Portfolio Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert the multi-page Jekyll portfolio into a single-page layout with sticky nav, accordion project cards, and compact content sections — optimized for recruiter scanning and project depth showcase.

**Architecture:** Custom `_layouts/portfolio.html` layout replaces Minimal Mistakes for the main page only. All content consolidated into `index.md` front matter. Vanilla JS for accordion/scroll behavior. Remote theme kept for 404 fallback.

**Tech Stack:** Jekyll, HTML5, CSS3 (custom), Vanilla JavaScript, GitHub Pages

---

## Phase 1: Foundation — Custom Layout & Styles

### Task 1: Create the base custom layout

**Files:**
- Create: `_layouts/portfolio.html`

**Step 1: Create the layout file with HTML skeleton**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{ site.title }} — {{ site.subtitle }}</title>
  <meta name="description" content="{{ site.description }}">
  <link rel="stylesheet" href="{{ '/assets/css/portfolio.css' | relative_url }}">
  <!-- Google Analytics -->
  {% if site.analytics.google.tracking_id %}
  <script async src="https://www.googletagmanager.com/gtag/js?id={{ site.analytics.google.tracking_id }}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '{{ site.analytics.google.tracking_id }}', { anonymize_ip: true });
  </script>
  {% endif %}
</head>
<body>

  <!-- Sticky Nav -->
  <nav class="site-nav" id="site-nav">
    <div class="nav-inner">
      <a href="#hero" class="nav-brand">{{ site.author.name }}</a>
      <div class="nav-links">
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#education" class="nav-link">Education</a>
        <a href="#contact" class="nav-link">Contact</a>
        <a href="{{ '/assets/Hemal-SeniorProgrammer-Resume.pdf' | relative_url }}" class="nav-link nav-cta" target="_blank">Resume</a>
      </div>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">&#9776;</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="hero">
    <div class="hero-content">
      <h1>{{ site.author.name }}</h1>
      <p class="hero-title">{{ site.subtitle }}</p>
      <p class="hero-tagline">Engine & Core Systems | Multiplayer Networking | UI Engineering | Tools & Optimization</p>
      <p class="hero-tech">Unreal Engine (UE4/5) | Unity | C++ | C# | Lua | Python</p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="{{ '/assets/Hemal-SeniorProgrammer-Resume.pdf' | relative_url }}" class="btn btn-secondary" target="_blank">Download Resume</a>
        <a href="#contact" class="btn btn-secondary">Contact Me</a>
      </div>
      <div class="hero-socials">
        {% for link in site.author.links %}
        <a href="{{ link.url }}" target="_blank" aria-label="{{ link.label }}"><i class="{{ link.icon }}"></i></a>
        {% endfor %}
      </div>
    </div>
  </section>

  <!-- Stats Bar -->
  <section class="stats-bar" id="stats">
    <div class="stats-bar-inner">
      <div class="stat-item"><span class="stat-num">10+</span><span class="stat-lbl">Years in Game Dev</span></div>
      <div class="stat-item"><span class="stat-num">80%+</span><span class="stat-lbl">Performance Gains</span></div>
      <div class="stat-item"><span class="stat-num">30%</span><span class="stat-lbl">Workflow Efficiency</span></div>
      <div class="stat-item"><span class="stat-num">Expert</span><span class="stat-lbl">Multiplayer Networking</span></div>
    </div>
  </section>

  <!-- Main content from index.md -->
  {{ content }}

  <!-- Footer -->
  <footer class="site-footer">
    <p>&copy; {{ 'now' | date: '%Y' }} {{ site.author.name }}. Built with Jekyll.</p>
  </footer>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossorigin="anonymous">
  <script src="{{ '/assets/js/portfolio.js' | relative_url }}"></script>
</body>
</html>
```

**Step 2: Verify file created**

Run: `ls _layouts/portfolio.html`
Expected: File exists

**Step 3: Commit**

```bash
git add _layouts/portfolio.html
git commit -m "feat: add custom portfolio layout skeleton"
```

---

### Task 2: Create the portfolio CSS

**Files:**
- Create: `assets/css/portfolio.css`

**Step 1: Write the complete stylesheet**

Create `assets/css/portfolio.css` with all styles covering:

- **Reset & base:** Box-sizing, system font stack, smooth scroll, dark background (#0f0f1e)
- **Nav:** Sticky top, backdrop-blur, nav-brand, nav-links, mobile hamburger toggle, active link highlight (#4a9eff underline)
- **Hero:** 70vh min-height, centered flex, gradient text for name, muted tech line, button row, social icons
- **Stats bar:** Horizontal flex row, compact, #1a1a2e background strip, accent numbers
- **Section headings:** Centered, consistent spacing, section max-width 1200px
- **Project cards:** CSS grid (3-col/2-col/1-col responsive), #1a1a2e background, border, thumbnail image, hover lift
- **Accordion:** `.project-detail` hidden by default, `max-height` transition, slide-open animation
- **Shipped titles:** Flip card grid (reuse existing flip-card styles)
- **Skills:** Pill/tag layout grouped by category, #4a9eff border pills
- **Education:** Compact card style
- **Contact:** Centered, social icon row, CTA button
- **Footer:** Simple centered text
- **Responsive breakpoints:** 1200px+, 768-1199px, <768px
- **Mobile nav:** Full-screen overlay menu on toggle

Key CSS variables:
```css
:root {
  --bg-primary: #0f0f1e;
  --bg-card: #1a1a2e;
  --bg-card-border: #2a2a3e;
  --accent: #4a9eff;
  --text-primary: #ffffff;
  --text-muted: #8892b0;
  --text-body: #a8b2d1;
  --max-width: 1200px;
}
```

**Step 2: Verify**

Run: `ls assets/css/portfolio.css`

**Step 3: Commit**

```bash
git add assets/css/portfolio.css
git commit -m "feat: add portfolio CSS with dark theme and responsive grid"
```

---

### Task 3: Create the portfolio JavaScript

**Files:**
- Create: `assets/js/portfolio.js`

**Step 1: Write the JS file with three features**

```javascript
// 1. Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
  });
}

// 2. Active section highlighting via IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -80% 0px' });

sections.forEach(s => observer.observe(s));

// 3. Accordion expand/collapse for project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', (e) => {
    // Don't toggle if clicking a link inside the card
    if (e.target.closest('a')) return;

    const detailId = card.getAttribute('data-detail');
    const detail = document.getElementById(detailId);
    if (!detail) return;

    const isOpen = detail.classList.contains('open');

    // Close all open details
    document.querySelectorAll('.project-detail.open').forEach(d => {
      d.classList.remove('open');
      d.style.maxHeight = null;
    });
    document.querySelectorAll('.project-card.expanded').forEach(c => {
      c.classList.remove('expanded');
    });

    // Open this one if it wasn't already open
    if (!isOpen) {
      detail.classList.add('open');
      detail.style.maxHeight = detail.scrollHeight + 'px';
      card.classList.add('expanded');
      // Scroll into view
      setTimeout(() => detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 300);
    }
  });
});

// 4. Close mobile nav when clicking a link
navAnchors.forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('nav-open');
  });
});
```

**Step 2: Verify**

Run: `ls assets/js/portfolio.js`

**Step 3: Commit**

```bash
git add assets/js/portfolio.js
git commit -m "feat: add portfolio JS for nav toggle, scroll highlight, and accordion"
```

---

## Phase 2: Content Migration — Consolidate into index.md

### Task 4: Rewrite index.md with all content sections

**Files:**
- Modify: `index.md` (complete rewrite)

**Step 1: Replace index.md with new content**

The new `index.md` should have:
- Front matter: `layout: portfolio`, `permalink: /`
- Body contains all section HTML:

**Projects section** (`<section id="projects">`):
- `<h2>` heading
- Professional projects subsection heading
- Grid of `.project-card` divs, each with:
  - `data-detail="detail-wavexr"` attribute
  - Thumbnail image, company name, dates, 1-line excerpt, shipped count badge
- After each card row: corresponding `.project-detail` divs (hidden) containing the full content currently in `_pages/projects.md` for each company (all sub-sections: Technical Leadership, Networking, Engine Optimization, Tools & UI, Engine Migration for WaveXR; Gameplay Engineering, Tools & Pipeline for Razor Edge; Key Achievements for Smartcloud)
- Personal projects subsection with same card+accordion pattern for Elemental Arsenal, Universal Data Sync, NeoThreads

**Shipped Titles section** (`<section id="shipped">`):
- Migrate the flip card grid from current `index.md` (Wave Beta, Wave Standalone, Alimentary Avengers, etc.)

**Skills section** (`<section id="skills">`):
- Content from `_pages/about.md` Technical Expertise section
- Grouped by category with pill/tag markup:
  - Languages: C++, C#, Lua, Python
  - Engines: UE4, UE5, Unity, Godot
  - Core Systems: GAS, Multiplayer Networking, Memory Management, Multithreading, 3D Math
  - UI & Frontend: UI Systems, MVVM, UI Animation, Interactive Interfaces
  - Optimization: Console/VR Optimization, Performance Profiling, GAAS Architecture
  - Core Competencies: System Architecture, Technical Leadership, Mentoring, Cross-discipline Collaboration, Engine Source Modification, Rapid Prototyping
  - Dev Tools: Visual Studio, Rider, VSCode, Perforce, Git, BuildGraph, TeamCity, AWS
  - Profiling: Unreal Insights, RenderDoc, Automation Tools
  - Management: JIRA, Confluence
  - AI Tools: Claude, Gemini, Copilot

**Education section** (`<section id="education">`):
- Content from `_pages/about.md` Education section
- Compact card layout: degree, institution, year per row

**Contact section** (`<section id="contact">`):
- Content from `_pages/contact.md`
- "Let's Connect" heading
- Interests list
- Contact info: email, phone, location
- Social links row
- Resume download button

**Step 2: Verify build**

Run: `bundle exec jekyll build 2>&1 | tail -5`
Expected: No errors, site builds to `_site/`

**Step 3: Commit**

```bash
git add index.md
git commit -m "feat: consolidate all content into single-page index.md"
```

---

### Task 5: Update navigation to anchor links

**Files:**
- Modify: `_data/navigation.yml`

**Step 1: Replace navigation entries with anchors**

```yaml
main:
  - title: "Projects"
    url: "/#projects"
  - title: "Skills"
    url: "/#skills"
  - title: "Contact"
    url: "/#contact"
```

Note: The custom layout uses its own nav, but this keeps the data file consistent if any theme pages reference it.

**Step 2: Commit**

```bash
git add _data/navigation.yml
git commit -m "feat: update navigation to single-page anchor links"
```

---

## Phase 3: Polish & Responsive Tuning

### Task 6: Test and fix responsive layout

**Files:**
- Modify: `assets/css/portfolio.css` (adjustments)

**Step 1: Run local server**

Run: `bundle exec jekyll serve`

**Step 2: Test at all breakpoints**

Check in browser at:
- 1440px (desktop wide)
- 1024px (desktop)
- 768px (tablet)
- 375px (mobile)

Verify:
- Nav hamburger appears on mobile
- Project cards stack correctly
- Accordion opens/closes smoothly
- Stats bar wraps on mobile
- Hero text is readable at all sizes
- Flip cards work on mobile (touch)

**Step 3: Fix any issues found and commit**

```bash
git add assets/css/portfolio.css
git commit -m "fix: responsive layout adjustments"
```

---

### Task 7: Verify build and clean up

**Files:**
- Possibly modify: `_config.yml` (if any config changes needed)
- Possibly modify: `_includes/head/custom.html` (remove old custom.css include if present)

**Step 1: Check for old custom.css references**

Run: `grep -r "custom.css" _includes/ _layouts/ 2>/dev/null`

If `_includes/head/custom.html` loads `custom.css`, either remove the include or clear it since the portfolio layout doesn't use the theme's head includes.

**Step 2: Full build test**

Run: `bundle exec jekyll build 2>&1`
Expected: Clean build, no warnings about missing files

**Step 3: Verify GA4 tracking is present in built output**

Run: `grep "G-TMB7WW66E6" _site/index.html`
Expected: Tracking ID found in the built HTML

**Step 4: Commit any cleanup**

```bash
git add -A
git commit -m "chore: clean up old theme references"
```

---

## Phase 4: Final Review

### Task 8: Visual review and final commit

**Step 1: Run local server**

Run: `bundle exec jekyll serve`

**Step 2: Full walkthrough checklist**

- [ ] Hero loads with name, title, tagline, buttons, social icons
- [ ] Stats bar shows all 4 stats in a row
- [ ] Project cards display in grid
- [ ] Clicking a project card expands its accordion
- [ ] Only one accordion open at a time
- [ ] Shipped titles flip cards work
- [ ] Skills section shows categorized tags
- [ ] Education section is compact
- [ ] Contact section has all info
- [ ] Sticky nav highlights current section on scroll
- [ ] Mobile hamburger menu works
- [ ] Resume PDF link works
- [ ] All external links open in new tab
- [ ] No console errors in browser dev tools
- [ ] Page loads fast (no external dependencies except Font Awesome)

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete single-page portfolio redesign"
```

---

## Summary of Phases

| Phase | Tasks | Description |
|-------|-------|-------------|
| 1: Foundation | Tasks 1-3 | Custom layout, CSS, and JS files |
| 2: Content | Tasks 4-5 | Migrate all page content into index.md, update nav |
| 3: Polish | Tasks 6-7 | Responsive fixes, cleanup |
| 4: Review | Task 8 | Visual review and final commit |
