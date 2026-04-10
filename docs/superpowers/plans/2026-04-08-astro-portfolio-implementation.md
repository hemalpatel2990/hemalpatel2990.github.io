# Astro Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio using Astro with a minimalist "Noir Engine" theme, optimized for the 6-second recruiter test.

**Architecture:** Data-driven Astro site using Content Collections for experience and projects. Single-page layout with high-contrast typography and no heavy JavaScript dependencies.

**Tech Stack:** Astro 4.x, Vanilla CSS (Modern CSS Variables), Markdown/YAML, GitHub Actions.

---

### Task 1: Environment & Legacy Cleanup

**Files:**
- Create: `_legacy/` (Directory)
- Modify: Move all existing root files/folders (except `.git`, `.github`, `.gitignore`, `docs`) to `_legacy/`

- [ ] **Step 1: Create legacy directory**
```bash
mkdir _legacy
```

- [ ] **Step 2: Move existing Jekyll files**
```bash
mv _config.yml _data _layouts _sass assets index.md Gemfile Gemfile.lock README.md 404.html _legacy/
```

- [ ] **Step 3: Commit cleanup**
```bash
git add .
git commit -m "chore: move legacy jekyll site to _legacy/"
```

---

### Task 2: Initialize Astro Project

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`
- Create: `src/pages/index.astro`, `src/layouts/Layout.astro`

- [ ] **Step 1: Initialize package.json**
```json
{
  "name": "hemal-portfolio-astro",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^4.0.0"
  }
}
```

- [ ] **Step 2: Initialize astro.config.mjs**
```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hemalpatel2990.github.io',
  base: '/',
  outDir: './dist',
});
```

- [ ] **Step 3: Create Noir Theme Layout**
`src/layouts/Layout.astro`:
```astro
---
interface Props {
	title: string;
}
const { title } = Astro.props;
---
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<title>{title}</title>
	</head>
	<body>
		<slot />
	</body>
</html>
<style is:global>
	:root {
		--bg: #0a0a0a;
		--text: #ffffff;
		--text-muted: #a3a3a3;
		--accent: #ffffff;
		--border: #262626;
	}
	html {
		font-family: system-ui, sans-serif;
		background: var(--bg);
		color: var(--text);
		scroll-behavior: smooth;
	}
	body {
		margin: 0;
		padding: 0;
	}
</style>
```

- [ ] **Step 4: Install dependencies and commit**
```bash
npm install
git add package.json package-lock.json astro.config.mjs tsconfig.json src/
git commit -m "feat: initialize astro project and noir layout"
```

---

### Task 3: Content Collection Strategy

**Files:**
- Create: `src/content/config.ts`
- Create: `src/content/experience/wavexr.md`, `src/content/experience/razor-edge.md`, `src/content/experience/smartcloud.md`
- Create: `src/content/projects/elemental-arsenal.md`, `src/content/projects/universal-data-sync.md`, `src/content/projects/neothreads.md`

- [ ] **Step 1: Configure Content Schemas**
`src/content/config.ts`:
```typescript
import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    date: z.string(),
    location: z.string(),
    order: z.number(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tech: z.array(z.string()),
    link: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { experience, projects };
```

- [ ] **Step 2: Add WaveXR Data**
`src/content/experience/wavexr.md`:
```markdown
---
title: "Software Engineer II"
company: "WaveXR"
date: "Nov 2019 – Dec 2025"
location: "Remote"
order: 1
---
- Led cross-functional engineering team for core Social Experience, overseeing system design and technical mentorship.
- Architected server-authoritative networking architecture, solving complex replication and latency challenges for multiplayer gameplay.
- Achieved 80%+ optimization in memory and frame time through Unreal Insights and profiling tools.
- Partnered with creative leads to rapid-prototype gameplay features, prioritizing playable iteration.
```

- [ ] **Step 3: Commit content**
```bash
git add src/content/
git commit -m "feat: set up content collections and migrate wavexr data"
```

---

### Task 4: Hero Component (6-Second Test)

**Files:**
- Create: `src/components/Hero.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Implement Hero Component**
`src/components/Hero.astro`:
```astro
<header class="hero">
  <div class="name-block">
    <h1>Hemal Patel</h1>
    <p class="title">Senior Gameplay & Systems Engineer</p>
  </div>
  <div class="impact-statement">
    <p><strong>10+ years</strong> architecting core systems and multiplayer networking with <strong>80%+ performance gains</strong> for shipped titles.</p>
  </div>
  <div class="expertise-bar">
    <div class="expertise-item">
      <span>Engines</span>
      <strong>Unreal Engine 5 | Unity</strong>
    </div>
    <div class="expertise-item">
      <span>Languages</span>
      <strong>C++ | C#</strong>
    </div>
  </div>
</header>

<style>
  .hero {
    max-width: 900px;
    margin: 80px auto;
    padding: 0 20px;
  }
  h1 { font-size: 3.5rem; margin: 0; font-weight: 800; letter-spacing: -0.02em; }
  .title { font-size: 1.5rem; color: var(--text-muted); margin-top: 5px; }
  .impact-statement { font-size: 1.5rem; margin: 40px 0; border-left: 4px solid var(--accent); padding-left: 25px; line-height: 1.4; }
  .expertise-bar { display: flex; gap: 40px; border-top: 1px solid var(--border); padding-top: 25px; }
  .expertise-item span { display: block; font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.1em; margin-bottom: 5px; }
  .expertise-item strong { font-size: 1.25rem; }
</style>
```

- [ ] **Step 2: Update Index Page**
`src/pages/index.astro`:
```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
---
<Layout title="Hemal Patel | Senior Gameplay & Systems Engineer">
  <main>
    <Hero />
  </main>
</Layout>
```

- [ ] **Step 3: Commit Hero**
```bash
git add src/components/Hero.astro src/pages/index.astro
git commit -m "feat: implement 6-second scan hero component"
```

---

### Task 5: Experience & Projects Sections

**Files:**
- Create: `src/components/Experience.astro`, `src/components/ProjectsGrid.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Implement Experience Component**
`src/components/Experience.astro`:
```astro
---
import { getCollection } from 'astro:content';
const exp = await getCollection('experience');
const sortedExp = exp.sort((a, b) => a.data.order - b.data.order);
---
<section class="experience">
  <h2>Selected Experience</h2>
  {sortedExp.map(async (item) => {
    const { Content } = await item.render();
    return (
      <div class="item">
        <div class="header">
          <h3>{item.data.company}</h3>
          <span>{item.data.date}</span>
        </div>
        <p class="role">{item.data.title}</p>
        <div class="content"><Content /></div>
      </div>
    );
  })}
</section>

<style>
  .experience { max-width: 900px; margin: 80px auto; padding: 0 20px; }
  h2 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em; color: var(--text-muted); border-bottom: 1px solid var(--border); padding-bottom: 10px; margin-bottom: 40px; }
  .item { margin-bottom: 50px; }
  .header { display: flex; justify-content: space-between; align-items: baseline; }
  h3 { margin: 0; font-size: 1.5rem; }
  .role { color: var(--text-muted); font-weight: 600; margin: 5px 0 15px; }
  .content { color: var(--text-muted); line-height: 1.6; }
</style>
```

- [ ] **Step 2: Commit Experience and update Index**
```bash
git add src/components/Experience.astro
git commit -m "feat: implement data-driven experience timeline"
```

---

### Task 6: Deployment Configuration (GitHub Actions)

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create Deploy Workflow**
`.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install, build, and upload
        uses: withastro/action@v2
```

- [ ] **Step 2: Commit and Finalize**
```bash
git add .github/workflows/deploy.yml
git commit -m "chore: add github actions deployment workflow for astro"
```
